import  { createStackNavigator } from '@react-navigation/stack';
import Home  from '../screens/home';
import cadastrarMusica  from '../screens/cadastrarMusica';



export function StackRoutes() {
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator>
            <Screen name= 'Home' component={Home}/>
            <Screen name='cadastrarMusica' component={cadastrarMusica}/>
        </Navigator>
    );
} 