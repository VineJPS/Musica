import { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Styles';
import axios from 'axios';

import { RootStackParamList } from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
    const [musicas, setMusicas] = useState<any[]>();
    const navigation = useNavigation<HomeScreenNavigationProp>();
    
    function navToCadastro(){
        navigation.navigate('CadastrarMusica');
    }

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/musicas")
            .then((res) => setMusicas(res.data))
            .catch((err) => console.error("Erro ao carregar músicas:", err))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PlayList</Text>
            <FlatList
                data={musicas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>#{item.id}</Text>
                        <View style={{ flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
                            <Text style={[styles.nome, { fontWeight: "bold" }]}>{item.name}</Text>
                            <Text style={styles.nome}>{item.compositor}</Text>
                        </View>
                        <View>
                            <Text style={styles.nome}>{item.duracao}</Text>
                            <Text style={styles.estilo}>{item.estilo}</Text>     
                        </View>
                        <Ionicons name="play-circle" size={30} style={{marginLeft:10, color:"#6f0497ff"}} />
                    </View>
                )}
            />
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => navigation.navigate('CadastrarMusica')}
            >
                <Text style={styles.addButtonText}>Adicionar Música</Text>
            </TouchableOpacity>
        </View>
    );
}