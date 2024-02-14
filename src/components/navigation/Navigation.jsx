import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ChatsListScreen } from "../../screens/ChatsListScreen";
import { ActusScreen } from "../../screens/ActusScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen } from "../../screens/ChatScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function ChatsNav() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: { backgroundColor: '#128B7E'},
            tabBarActiveTintColor: "white",
            tabBarIndicatorStyle: { backgroundColor: 'white' }
        }}>
            <Tab.Screen component={ChatsListScreen} name="Discussions"/>
            <Tab.Screen component={ActusScreen} name="Actus"/>
        </Tab.Navigator>
    )
}

export function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ChatsList" 
            screenOptions={{
                headerStyle: { backgroundColor: '#128B7E' },
                headerTintColor: "white"
            }}>
                <Stack.Screen name="ChatsList" component={ChatsNav} options={{headerShown: false}}/>
                <Stack.Screen name="Chat" component={ChatScreen} 
                options={({route}) => {
                    console.log('route', route)
                    return ({title: route.params.user.user.name})}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}