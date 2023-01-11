import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignSelf: 'center', paddingVertical: '20%', paddingHorizontal: '5%' }}>
                <Image style={{ width: 300, height: 250, borderRadius: 150 }} source={require('./5.jpg')} />
            </View>
            <Text style={{fontSize: 30, fontFamily: 'monospace', textAlign:'center', color: 'black'}}>Hello</Text>
            <Text style={{textAlign: 'center', fontSize: 20, paddingHorizontal: '5%'}}>Best place to write life stories and share your journey experience</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Form')} style={{ backgroundColor: 'blue', borderRadius: 10, paddingVertical: '4%',marginHorizontal: '15%' ,marginTop: '15%' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderWidth:3, borderColor: 'blue' , borderRadius: 10, paddingVertical: '4%',marginHorizontal: '15%' ,marginTop: '5%' }}>
                <Text style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold' }}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}