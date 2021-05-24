import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import firebase from 'firebase';

export class Login extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            name:''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result)=> {
            console.log(result)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    render(){
    return (
        <View>
            <TextInput
                placeholder="email"
                onChangeText={(email)=> this.setState({email})}
            />
            <TextInput
                placeholder="name"
                onChangeText={(name)=> this.setState({name})}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password)=> this.setState({password})}
            />
            <Button
                onPress={()=> this.onSignUp()}
                title='Sign In'
            />
        </View>
    )
    }
}

export default Login