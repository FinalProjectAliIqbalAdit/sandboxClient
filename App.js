import React from "react";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import store from './store/store'
import { Provider } from "react-redux"

import Map from './screens/Map'
import Login from './screens/Login'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Meetings from "./screens/Meetings"
import MeetingDetail from './screens/MeetingDetail'
import Authentication from './screens/Authentication';
import RegisterForm from './screens/RegisterForm';

console.disableYellowBox = true;

const MapStack = createStackNavigator({
    Map: {screen: Map}
},{
    initialRouteName: "Map"
})

const MeetingsStack = createStackNavigator({
    Auth: { screen: Authentication },
    Register: { screen: RegisterForm },
    Meetings: { screen: Meetings},
    MeetingDetail: { screen: MeetingDetail },
    Map: {screen: Map}
},{
    initialRouteName: "Auth"
})
    
const AppNavigator = createBottomTabNavigator({
    Meetings: {screen: MeetingsStack},
    Map: {screen: MapStack}
},{
    initialRouteName: "Meetings",
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}