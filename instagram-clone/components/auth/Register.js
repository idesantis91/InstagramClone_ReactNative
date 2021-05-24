import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            name:''
        }
        this.SignUp = this.SignUp.bind(this)
    }

    onSignUp(){

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
                title='Sign Up'
            />
        </View>
    )
    }
}

export default Register