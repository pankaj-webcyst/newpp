import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

export default function Form({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingVertical: '25%', paddingHorizontal: '5%' }}>
                <Text style={{ fontSize: 40, fontFamily: 'monospace', color: 'black' }}>Welcome!</Text>
                <Text style={{ fontSize: 20 }}>Sign in to continue</Text>
            </View>
            <View style={{ paddingHorizontal: '5%' }}>
                <TextInput
                    placeholder="pankajkumawat51388@gmail.com" style={{ borderBottomWidth: 1, borderRadius: 10, }} />

                <TextInput
                    placeholder="*********" style={{ borderBottomWidth: 1, borderRadius: 10, marginTop: '15%' }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ marginHorizontal: '15%', backgroundColor: 'blue', borderRadius: 5, paddingVertical: '4%', marginTop: '15%' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', marginTop: '3%' }}>Forgot Password?</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: '10%' }}>Social Media Login</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 150, marginRight: 20 }} source={require('./10.jpg')} />
                <Image style={{ width: 50, height: 50, borderRadius: 150, marginRight: 20 }} source={require('./11.jpg')} />
                <Image style={{ width: 40, height: 40, borderRadius: 150 }} source={require('./12.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: '5%', alignSelf:'center' }}>
                <Text>Don't have an account?</Text>
                <Text style={{color:'blue', fontWeight:'bold', marginLeft: 10}}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}