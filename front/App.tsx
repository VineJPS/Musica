import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CadastrarMusica } from './src/screens/cadastrarMusica';
import { Home } from './src/screens/Home'

// Define os tipos das rotas
export type RootStackParamList = {
  Home: undefined;
  CadastrarMusica: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#121212',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Minhas Músicas',
          }}
        />
        <Stack.Screen 
          name="CadastrarMusica" 
          component={CadastrarMusica}
          options={{
            title: 'Cadastrar Música',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}