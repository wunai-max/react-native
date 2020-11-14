import React, { useState } from 'react';
import { View,  StyleSheet, Text,Image ,ScrollView} from 'react-native';



const List = () => {
const [list ,setList]=useState([
  {
   id:"1",
   img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2811520221/O1CN01SyV0kp1DVGALC5uUn_!!2811520221.jpg_430x430q90.jpg",
   dec:"马克华菲女装复古镂空套头针织毛衫20202冬新款拼接撞色花边上衣",
   price:"439",
   source:"京东商城"
  },
  {
   id:"2",
   img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2811520221/O1CN01SyV0kp1DVGALC5uUn_!!2811520221.jpg_430x430q90.jpg",
   dec:"马克华菲女装复古镂空套头针织毛衫20202冬新款拼接撞色花边上衣",
   price:"439",
   source:"京东商城"
  },
  {
   id:"3",
   img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2811520221/O1CN01SyV0kp1DVGALC5uUn_!!2811520221.jpg_430x430q90.jpg",
   dec:"马克华菲女装复古镂空套头针织毛衫20202冬新款拼接撞色花边上衣",
   price:"439",
   source:"京东商城"
  },
  {
   id:"4",
   img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2811520221/O1CN01SyV0kp1DVGALC5uUn_!!2811520221.jpg_430x430q90.jpg",
   dec:"马克华菲女装复古镂空套头针织毛衫20202冬新款拼接撞色花边上衣",
   price:"439",
   source:"京东商城"
  },
 ])
  return (
      <View style={styles.aa}>
      <Text style={{height:50,lineHeight:50,color:'#cecece'}}>实时收录大家查价发现的最低价商品</Text>
      {
        list.map(element => {
        return (
        <View style={styles.bb} key={element.id}>
        <Image style={styles.tinyLogo} source={{uri:element.img}} />
        <View>
        <Text style={{fontSize:15,marginLeft:10}} >{element.dec}</Text>
        <View style={{flexDirection:'row',height:40,}}>
        <Text style={{fontSize:20,color:"red",lineHeight:40,height:40,marginLeft:10}}>￥{element.price}</Text>
        <Text style={{color:"#666",lineHeight:20,height:20,marginLeft:50,backgroundColor:"#eee",marginTop:10}}>历史最低</Text>
        </View>
        <Text style={{color:"#666",lineHeight:20,height:20,marginLeft:10,marginTop:10}}>{element.source}</Text>
        </View>
        </View>
        )
        })
      }
      </View>
  );
}

const styles = StyleSheet.create({
  aa: {
    flex:1,
  },
  bb:{
    paddingLeft:10,
    flexDirection:'row',
    height:150
  },
  tinyLogo:{
    width:'30%',
    height:'80%'
  }
});

export default List;