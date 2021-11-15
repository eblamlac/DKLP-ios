// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import zhuye from './view/index.js'
import suc from './view/suc.js'
import flatlistee from './view/aaaa.js'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import look from './view/look.js';
import zhuce from './view/zhuce1.js'
import zhuce2 from './view/zhuce2.js'

const { width, height } = Dimensions.get('screen')
function rpx(p) {
  return (width / 750) * p
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function Title() {
  return (
    <View style={{ flexDirection: 'row', position: 'relative', bottom: 4, justifyContent: 'center', alignItem: 'center', width: 300, height: 40, borderRadius: 30, backgroundColor: 'lightgray' }}>
      <Image source={require('./screens/search.png')} style={{ width: 20, height: 20, position: 'relative', top: 8 }} />
      <TextInput placeholder='搜索' />
    </View>
  );
}
const Stack = createStackNavigator();


function Xianshi() {

  return (
    <View style={{ width: 80, height: 200, backgroundColor: 'white' }}>
      <FlatList
      />
    </View>
  )
}


function App() {
  return (
    <NavigationContainer >
      {/*样式导航容器*/}
      <Stack.Navigator>
        {/*相当于微信小程序中的package.json 配置导航器中的组件有哪些，及其对应的名字*/}

        <Stack.Screen name="zhuye" component={zhuye} navigationOptions={{ header: 'null' }} options={{ headerShown: false, title: '请注册您的账户' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="suc" component={suc} options={{
          title: '新闻页',
          headerRight: () => (<TouchableOpacity onPress={() => alert('我被点击了')}><Image source={require('./screens/tianjia.png')} style={{ width: 30, height: 30, color: 'white' }}
          /></TouchableOpacity>)
        }} />
        <Stack.Screen name="flatlistee" component={flatlistee} options={{ title: '高性能滚动组件' }} />
        <Stack.Screen name="look" component={look} options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Image source={require('./screens/ts.png')} style={{ width: 30, position: 'relative', bottom: 3, height: 30 }} />
            </TouchableOpacity>
          ),

          headerStyle: {
            backgroundColor: '#601394',
            display: 'flex',
            alignItem: 'center',

          },
          headerTitle: props => <Title {...props} />
          ,
          headerRight: () => (
            <TouchableOpacity>
              <Image source={require('./screens/lanmu.png')} style={{ width: 25, height: 25, marginRight: 17, position: 'relative', bottom: 4 }} />
            </TouchableOpacity>
          )
        }} />


        <Stack.Screen

          name="zhuce" component={zhuce} options={{
            /*  */
            headerTitle: "",
            headerStyle: {
              backgroundColor: 'white'
            }


          }} />



        <Stack.Screen

          name="zhuce2" component={zhuce2} options={{
            /*  */
            headerTitle: "",
            headerStyle: {
              backgroundColor: 'white'
            }

          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;