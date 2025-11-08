import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './StylecadastrarMusica';
import axios from 'axios';

export function CadastrarMusica() {
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(false);
    
    const [form, setForm] = useState({
        name: '', compositor: '', duracao: '', estilo: ''
    });

    const cadastrar = async () => {
        if (!form.name || !form.compositor || !form.duracao || !form.estilo) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        setLoading(true);
        
        try {
            await axios.post("https://unputrefied-dyspeptically-alverta.ngrok-free.dev/api/musicas", form);
            Alert.alert('Sucesso', 'Música cadastrada!');
            setForm({ name: '', compositor: '', duracao: '', estilo: '' });
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>🎵 Nova Música</Text>
            
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={form.name}
                        onChangeText={(text) => setForm({...form, name: text})}
                        placeholder="Nome da música"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Compositor</Text>
                    <TextInput
                        style={styles.input}
                        value={form.compositor}
                        onChangeText={(text) => setForm({...form, compositor: text})}
                        placeholder="Nome do compositor"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Duração</Text>
                    <TextInput
                        style={styles.input}
                        value={form.duracao}
                        onChangeText={(text) => setForm({...form, duracao: text})}
                        placeholder="Ex: 3:45"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Estilo</Text>
                    <TextInput
                        style={styles.input}
                        value={form.estilo}
                        onChangeText={(text) => setForm({...form, estilo: text})}
                        placeholder="Rock, Pop, etc..."
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.cancelButton}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={cadastrar}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Salvando...' : 'Salvar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}