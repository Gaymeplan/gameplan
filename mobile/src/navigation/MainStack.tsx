import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';

const MainStack = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
    },
    {
        initialRouteName: 'Login',
    }
);

export default MainStack;
