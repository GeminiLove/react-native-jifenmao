/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Navigator
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import MeItem from './meItem';
import Zcfb from './zcfb';
import ShowBarcode from './showBarcode';
import Qcbx from './qcbx/qcbx';
import Tjyj from './tjyj/tjyj';
import Wydp from './wydp/wydp';
import More from './more/more';

export default class Me extends Component {
  render(){
    return(
      <Navigator
      initialRoute={{name:'memain',component:MeMain}}
      renderScene={(route,navigator)=>{
        let Component = route.component;
        return <Component {...route.params} navigator={navigator}/>
      }}/>
    )
  }
}

  class MeMain extends Component{

    constructor(props) {
    super(props);
    this.state = {
      username: '无名氏',
      userlevel:'V1',
    };
  }
  render() {
    return (

      <View style={styles.wrapper}>
         <View style={styles.topView}>
          <View style={styles.topcenterview}>
            <Image source={require('../../images/jifenmao.png')} style={styles.jifenmaoImage}/>
            <Text style={styles.text}>{this.state.userlevel}</Text>
            <Text style={styles.username}>{this.state.username}</Text>

          </View>

          <View style={styles.topBottomView}>
            <ShowBarcode />
            <Text style={{color:'white',marginLeft:15,marginRight:10}}>|</Text>
            <Text style={{color:'white',marginRight:5}}>切换</Text>
            <Icon
              name='ios-refresh'
              size={20}
              color='white'
              style={{marginTop:2}}/>
          </View>
         </View>
         <ScrollView style={{backgroundColor:'#eeeeee'}}>
         <TouchableOpacity onPress={this.goTolq}>
           <MeItem lefttitle='零钱' leftnumber=':50' />
         </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='消费积分' leftnumber=':0.0'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='提现积分' leftnumber=':0.0'/>
          </TouchableOpacity>
          <View style={{height:10}}></View>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='我的朋友圈'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='淘宝天猫京东积分'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='我的明细'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='养老保险'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToQcbx}>
            <MeItem lefttitle='汽车保险'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToWydp}>
            <MeItem lefttitle='我有店铺，我要加入'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTotjyj}>
            <MeItem lefttitle='推荐有奖，我要推荐'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTozcfb}>
            <MeItem lefttitle='政策发布'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTolq}>
            <MeItem lefttitle='最新资讯'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToMore}>
            <MeItem lefttitle='更多'/>
          </TouchableOpacity>
         </ScrollView>
      </View>
    );
  }



  goTolq=()=>{alert('正在部署中...')}
  goToQcbx=()=>{
    const {navigator}=this.props;
    if (navigator){
      navigator.push({
        name:'qcbx',
        component:Qcbx
      })
  }
}
  goToWydp=()=>{
    const {navigator}=this.props;
    if (navigator){
      navigator.push({
        name:'wydp',
        component:Wydp
      })
  }
}

  goTotjyj=()=>{
    const {navigator}=this.props;
    if (navigator){
      navigator.push({
        name:'tjyj',
        component:Tjyj
      })
  }
}
  goTozcfb=()=>{
    const {navigator}=this.props;
    if (navigator){
      navigator.push({
        name:'zcfb',
        component:Zcfb
      })
    }
  }
  goToMore=()=>{
    const {navigator}=this.props;
    if (navigator){
      navigator.push({
        name:'more',
        component:More
      })
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
   },
   topView:{
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#ec6638',
     width:width,
     height:height/11*3
   },
   topcenterview:{
     justifyContent: 'center',
     alignItems: 'center',
     width:width/4,
     height:height/11*3
   },
   jifenmaoImage:{
     width:width/4,
     height:width/4,
     marginTop:25,
     marginBottom:23,

   },
   username:{
     fontSize:18,
     color:'white',
   },
   text:{
     color:'white',
     fontSize:14,
     position:'absolute',
     right:0,
     bottom:height/11-10
   },
   topBottomView:{
     flexDirection:'row',
     alignItems:'center',
     position:'absolute',
     right:30,
     bottom:10
   },

});
