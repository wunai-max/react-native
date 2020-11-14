

import React ,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/pages/Home';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      selectedTab:'home',
      value:'通过购物App复制链接到这里'
     }
}

  render() { 
    return ( 
      <View style={styles.container}>
        <TabNavigator>
       <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    selectedTitleStyle={{color:"#f86300"}}
    title="查历史价"
    renderIcon={() => <FontAwesome name='line-chart' style={[styles.aa]}/>}
    renderSelectedIcon={() => <FontAwesome name='line-chart' style={[styles.aa]}/>}
    onPress={() => this.setState({ selectedTab: 'home' })}
    tabBarOptions={{activeTintColor:"#f86300"}}
    >
    <Home />
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'reveal'}
    selectedTitleStyle={{color:"#f86300"}}
    title="超值爆料"
    renderIcon={() =>  <FontAwesome name='hand-o-right' size={20} color={'#000'}/>}
    renderSelectedIcon={() =>  <FontAwesome name='hand-o-right' size={20} color={'#000'}/>}
    onPress={() => this.setState({ selectedTab: 'reveal'})}>
    <View><Text style={{fontSize:25}}>超值爆料待开发</Text></View>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'roll'}
    selectedTitleStyle={{color:"#f86300"}}
    title="搜淘宝卷"
    renderIcon={() =>  <FontAwesome name='search' size={20} color={'#000'}/>}
    renderSelectedIcon={() =>  <FontAwesome name='search' size={20} color={'#000'}/>}
    onPress={() => this.setState({ selectedTab: 'roll' })}>
   <View><Text style={{fontSize:25}}>搜淘宝卷待开发</Text></View>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'mine'}
    selectedTitleStyle={{color:"#f86300"}}
    title="我的"
    renderIcon={() =>  <Ionicons name='person-outline' size={20} color={'#000'}/>}
    renderSelectedIcon={() =>  <Ionicons name='person-outline' size={20} color={'#000'}/>}
    onPress={() => this.setState({ selectedTab: 'mine' })}>
   <View><Text style={{fontSize:25}}>我的待开发</Text></View>
  </TabNavigator.Item>
   </TabNavigator>
      </View>
    );
   } 
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aa:{
    fontSize:20
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head:{
    width:'100%',
    height:190,
    backgroundColor:'#0a3761'
  },
  thumbnail: {
    width: 200,
    height: 300,
  },
  inp:{
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1 ,
    backgroundColor:'#fff',
    marginTop:25,
    width:320,
    borderRadius:10
  },
  nav:{
    width:100,
    height:50,
    borderBottomWidth:2,
    borderBottomColor:'#f86300',
    fontSize:15,
    textAlign:"center",
    lineHeight:50,
    marginLeft:20,
    fontWeight:'bold'
  },
  nav1:{
    width:100,
    height:50,
    fontSize:15,
    textAlign:"center",
    lineHeight:50,
    marginLeft:20
  }
});

export default App;
