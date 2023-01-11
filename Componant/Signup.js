import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function Signup({}) {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#2d665f', paddingVertical: '40%', paddingHorizontal: '5%' }}>
                    <Text style={{ fontSize: 40, color: 'white', fontFamily: 'monospace' }}>Welcome</Text>
                    <Text style={{ fontSize: 25, color: 'white' }}>sign out Your Account</Text>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingVertical: '5%' }}>
                    <Text>First Name</Text>
                    <TextInput
                        placeholder="" style={{ borderWidth: 1, borderRadius: 10, fontSize: 20 }} />
                    <Text style={{ marginTop: '5%' }}>Last Name</Text>
                    <TextInput
                        placeholder="" style={{ borderWidth: 1, borderRadius: 10, fontSize: 20 }} />
                    <Text style={{ marginTop: '5%' }}>Date of Birth</Text>
                    <TextInput
                        placeholder="YYYY-MM-DD" style={{ borderWidth: 1, borderRadius: 10, fontSize: 15 }} />
                    <TouchableOpacity>
                        <Text style={{ marginTop: '5%', color: 'blue' }}>continue With Facebook?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#2d665f', borderRadius: 20, paddingVertical: '4%', marginTop: '5%' }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}