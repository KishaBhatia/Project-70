import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
  }

}

const TabNavigator=createBottomTabNavigator({
  Read:{screen:ReadStoryScreen},
  Write:{screen:WriteStoryScreen}
},
  {defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({ })=>{
      const routeName=navigation.state.routeName
      if(routeName==="Read"){
        return(
          <Image source={require("./images/read.png")}
                 style={styles.tabBarIcons}
          />
        )
      }
      else if(routeName==="Write"){
        return(
          <Image source={require("./images/write.png")}
                 style={styles.tabBarIcons}
          />
        )
      }
    }
  })
  } 
)

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},

abBarIcons:{
height:40,
width:40
}
});
