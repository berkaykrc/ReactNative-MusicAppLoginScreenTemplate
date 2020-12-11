import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function LoginButton({ buttonText }) {
    return (
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    loginBtn: {
        width: 180,
        backgroundColor: "#FF0000",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: '#FFF',
    }

})

export default LoginButton;
