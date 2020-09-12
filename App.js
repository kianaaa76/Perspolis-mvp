import React,{Component} from 'react';
import { AsyncStorage } from "react-native";
import { Provider } from "react-redux";r
import {
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

class App extends Component {
  render(){
    return(
      <Provider>
        <AppContainer/>
      </Provider>
    );
  }
}

const TabNav = createBottomTabNavigator({
    Feed: Feed,
    Explore: Explore
  },
  {
    tabBarOptions: {
      activeTintColor: "#202020",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 15,
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(TabNav);

export default App;