import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
import string from '../constant/string';
import constantElement from '../constant/constantElement';
const ForgotPassword = ({ navigation }) => {

    const [Forgotpassword, setForgotPassword] = useState('');
    const [chForgotpassword, setchForgotpassword] = useState(true);
    const [ForgotpasswordValidError, setForgotpasswordValidError] = useState('');

    const handleForgotPassword = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (Forgotpassword == "" || Forgotpassword == undefined || Forgotpassword == null) {
            setForgotpasswordValidError(string.PleaseEnterEmail);
            setchForgotpassword(false);
            return false;
        } else if (!reg.test(Forgotpassword)) {
            setForgotpasswordValidError(string.PleaseEntervalidemailaddress);
            setchForgotpassword(false);
            return false;
        } else {
            setForgotpasswordValidError("");
            setchForgotpassword(true);
            return true;
        }

    }
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor={Colors.statusbarbackground} />
            <View style={styles.logintext}>
                <Text style={styles.textlog}>{string.ForgotPasword}</Text>
                <Text style={styles.subtext}>{string.WelcomeHomeMyFriend}</Text>
            </View>

            <View style={styles.inputView}>
                <Icon name={string.email} size={constantElement.size} style={styles.inputicon} />
                <TextInput
                    style={styles.TextInput}
                    placeholder={string.Email}
                    autoCorrect={false}
                    autoCapitalize={string.none}
                    onChangeText={setForgotPassword}
                    onEndEditing={handleForgotPassword}
                    testID="Forgot"
                />
            </View>
            <View>
                {chForgotpassword == true ? null : <Text style={styles.color}>{ForgotpasswordValidError}</Text>}
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { if (handleForgotPassword()) { navigation.replace("Signup") } }}>
                <Text style={styles.loginbtntext}>{string.SUBMIT}</Text>
            </TouchableOpacity>
            <Text style={styles.account}>{string.Alreadyhaveanaccount}</Text>
            <View style={styles.account}>
                <Text style={styles.textplease}>{string.Please}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.textsignup} testID="Logintest">{string.Login}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        padding: 30
    },
    account:{ flexDirection: "row", alignItems: "center", justifyContent: "center" },
    logintext: {
        marginTop: 30
    },
    textlog: {
        fontSize: 30,
        color: "black",
        marginTop: 20,
        fontWeight: "bold"
    },
    subtext: {
        fontSize: 15,
        marginTop: 20
    },
    inputView: {

        marginTop: 20,
        flexDirection: "row"
    },
    TextInput: {
        paddingLeft: 50,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 15
    },
    inputicon: {
        marginTop: 15,
        position: "absolute",
    },
    loginBtn:
    {
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: Colors.primaryColor,
    },
    loginbtntext: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    textforgot: {
        marginTop: 12,
    },
    account: {
        marginTop: 20,
        textAlign: 'center'
    },
    textsignup: {
        color: Colors.primaryColor
    },
    
color:{
    color:Colors.red
}

})
export default ForgotPassword;
