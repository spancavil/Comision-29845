import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Styles/colors'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux'
import { signUp } from '../features/auth'
import { schemaEmail, schemaPassword } from '../Utils/validateSchemas'

const LoginScreen = () => {

    const [registroVista, setRegistroVista] = useState(false)
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch()

    const handleSignup = () => {
        
        const validateEmail = schemaEmail.validate({email: email})

        const validatePassword = schemaPassword.validate({password: password})

        console.log(validateEmail);
        console.log(validatePassword)

        if (validateEmail.error) setEmailError(validateEmail.error.message)

        else setEmailError("")

        if (password === confirmPassword){
            console.log("Se registra!");
            dispatch(signUp({email: email, password: password}))
        }
    } 
 
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registroVista ? "Registro": "Login"}</Text>
                <Input label="Email" password={false} onChange={setEmail} value ={email} error={emailError}/>
                <Input label="Password" password={true} onChange={setPassword} value ={password}/>
                <Input label="Confirm password" password={true} onChange={setConfirmPassword} value ={confirmPassword}/>
                <Button title="Signup" onPress={handleSignup}/>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige
    },
    content: {
        backgroundColor: colors.darkBlue,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    title: {
        fontFamily: 'LatoRegular',
        fontSize: 24,
        textAlign: 'center'
    },

})