import React, {useState} from 'react';
import List from '../component/List'
import {Text, View, StyleSheet,ScrollView,TextInput,SafeAreaView } from 'react-native';

function Home() {
  const styles = StyleSheet.create({
    container: {
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
  const [value, onChangeText] = useState('通过购物App复制链接到这里');
    return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={{height:100,alignItems:"center"}}>
        <Text style={{color:"#fff",marginLeft:240,marginTop:20,borderBottomWidth:1,borderBottomColor:"#fff"}}>新手教程</Text>
        <Text style={{color:"#fff",fontSize:25,marginTop:20,borderBottomWidth:3,borderBottomColor:"#f86300"}}>历史价格查询</Text>
        </View>
        <View style={{height:90,backgroundColor:"#0a3761",alignItems:"center"}}>
        <TextInput
        style={styles.inp}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
        </View>
      </View>
      <View style={{flexDirection:'row',height:50}}>
        <Text style={styles.nav}>历史最低</Text>
        <Text style={styles.nav1}>查询排行</Text>
        <Text style={styles.nav1}>实时好价榜</Text>
      </View>
      <ScrollView>
      <List />
      </ScrollView>
    </View>
    )
  }

export default Home;