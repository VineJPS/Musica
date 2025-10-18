import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import axios from 'axios';

export function CadastrarMusica() {
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        compositor: '',
        duracao: '',
        estilo: ''
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.compositor || !formData.duracao || !formData.estilo) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);
        
        try {
            await axios.post("http://127.0.0.1:8000/api/musicas", formData);
            
            Alert.alert('Sucesso', 'Música cadastrada com sucesso!');
            
            // Limpar formulário
            setFormData({
                name: '',
                compositor: '',
                duracao: '',
                estilo: ''
            });
            
            // Voltar para a lista
            navigation.navigate('Home');
            
        } catch (error) {
            console.error('Erro ao cadastrar música:', error);
            Alert.alert('Erro', 'Não foi possível cadastrar a música');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView >
            <Text>🎵 Cadastrar Nova Música</Text>
            
            <View>
                <View>
                    <Text>Nome da Música</Text>
                    <TextInput
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                        placeholder="Digite o nome da música"
                    />
                </View>

                <View>
                    <Text>Compositor</Text>
                    <TextInput
                        value={formData.compositor}
                        onChangeText={(text) => handleChange('compositor', text)}
                        placeholder="Digite o nome do compositor"
                    />
                </View>

                <View>
                    <Text>Duração</Text>
                    <TextInput
                        value={formData.duracao}
                        onChangeText={(text) => handleChange('duracao', text)}
                        placeholder="Ex: 3:45"
                    />
                </View>

                <View>
                    <Text>Estilo Musical</Text>
                    <TextInput
                        value={formData.estilo}
                        onChangeText={(text) => handleChange('estilo', text)}
                        placeholder="Ex: Rock, Pop, Sertanejo..."
                    />
                </View>

                <View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                        disabled={loading}
                    >
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={handleSubmit}
                        disabled={loading}
                    >
                        <Text>
                            {loading ? 'Cadastrando...' : 'Salvar Música'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}