import React from "react";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import store from './store/store'
import { Provider } from "react-redux"
import { NavigationActions } from 'react-navigation';


import Login from './screens/Login'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Meetings from "./screens/Meetings"
import MeetingDetail from './screens/MeetingDetail'

const MeetingNavigation = createStackNavigator({
    Meetings : {
        screen : Meetings,
        navigationOptions : () => ({
          header : null
        })
    },
    MeetingDetail : {
        screen : MeetingDetail,
    },
    Login
})

const AppNavigator = createBottomTabNavigator({
    Home,
    Profile,
    Meetings : {
        screen : MeetingNavigation,
    }
},{
    initialRouteName : 'Meetings'
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