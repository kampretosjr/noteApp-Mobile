import React from 'react';
import { createAppContainer,createStackNavigator,createSwitchNavigator ,createDrawerNavigator} from 'react-navigation';
import Home from '../../screens/Home'
import History from '../../screens/History'
import AddNote from '../../screens/AddNote'
import AddCategory from '../../screens/AddCategory'
import DetailLoan from '../../screens/DetailLoan'
import Sider from '../../screens/Drawer'

const AppNavigator = createStackNavigator(
  { 
    AddCategory: {
      screen: AddCategory,
      navigationOptions: { header: null }
    },
    AddNote: {
      screen: AddNote,
      navigationOptions: { header: null }
    },
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
 
    
    DetailLoan: {
      screen: DetailLoan,
      navigationOptions: { header: null }
    },
    History: {
      screen: History,
      navigationOptions: { header: null }
    },
   
    Sider: {
      screen: Sider,
      navigationOptions: { header: null }
    },
    
  }
)
const drawer = createDrawerNavigator (
  {AppNavigator},{contentComponent:Sider}

)

export default createAppContainer( createSwitchNavigator( { drawer} ) )

