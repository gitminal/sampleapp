import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useEffect } from "react";
import Colors from '../constant/Colors';
import string from '../constant/string';
import Icon from 'react-native-vector-icons/Ionicons';
import constantElement from '../constant/constantElement';
import Loginwithgoogle from './Loginwithgoogle';
import { notificationlistener } from './notificationservice';
import { Loginwithfacebook } from './Loginwithfacebook';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [chEmail, setchEmail] = useState(true);
    const [emailValidError, setEmailValidError] = useState('');

    const [Password, setPassword] = useState('');
    const [chPassword, setchPassword] = useState(true);
    const [passwordValidError, setpasswordValidError] = useState('');

    const handleValidEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email == "" || email == undefined || email == null) {
            setEmailValidError(string.PleaseEnterEmail);
            setchEmail(false);
            return false;
        } else if (!reg.test(email)) {
            setEmailValidError(string.PleaseEntervalidemailaddress);
            setchEmail(false);
            return false;
        } else {
            setEmailValidError("");
            setchEmail(true);
            return true;
        }
    };
    const handlePassword = () => {
        var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (Password == "" || Password == undefined || Password == null) {
            setpasswordValidError(string.PleaseEnterPassword);
            setchPassword(false);
            return false;
        } else if (!reg.test(Password)) {
            setpasswordValidError(string.Entervalidpassword);
            setchPassword(false);
            return false;
        } else {
            setpasswordValidError("");
            setchPassword(true);
            return true;
        }
       
    };
    useEffect(() => {
        notificationlistener()
        }, []);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.statusbarbackground} />
                <View style={styles.logintext}>
                    <Text style={styles.textlog}>{string.Login}</Text>
                    <Text style={styles.subtext}>{string.WelcomeHomeMyFriend}</Text>
                </View>
                <View style={styles.inputemail}>
                    <View style={styles.inputView}>
                        <Icon name={string.email} size={constantElement.size} style={styles.inputicon} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder={string.Email}
                            autoCorrect={false}
                            autoCapitalize={string.none}
                            onChangeText={setEmail}
                            onEndEditing={handleValidEmail}
                            testID="Emailtest"
                        />

                    </View>
                    <View>
                        {chEmail == true ? null : <Text style={styles.color} testID="error">{emailValidError}</Text>}
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Icon name={string.password} size={constantElement.size} style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder={string.Password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        onEndEditing={handlePassword}
                        testID="Passwordtest"

                    />
                </View>
                <View>
                    {chPassword == true ? null : <Text style={styles.color}>{passwordValidError}</Text>}
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    if (handleValidEmail() && handlePassword()) {
                        navigation.navigate("Dashboard")
                    }
                }}>
                    <Text style={styles.loginbtntext} testID="Signuptest">{string.LOGIN}</Text>
                </TouchableOpacity>

                <View style={styles.rememberview}>
                    <View style={styles.remember} />

                    <Text style={styles.textremem}>{string.RememberPasword}</Text>

                </View>
                <Text onPress={() => { navigation.navigate("Forgotpassword") }} testID="Forgotpassword" style={styles.textforgot}>{string.ForgotPasword}</Text>
                <Text style={styles.account}>{string.Donthaveanaccount}</Text>
                <View style={styles.pleaseview}>
                    <Text style={styles.textplease}>{string.Please}</Text>
                    <Text onPress={() => { navigation.navigate("Signup") }} testID="Signup" style={styles.textsignup}>{string.SIGNUP}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.loginfacebookbackgroundcolor } onPress={() =>Loginwithfacebook(navigation)}>
                        <Image style={styles.image} source={require('../asset/facebook.png')} />
                        <Text style={styles.loginfacebookcolor}>{string.LOGINWITHFACEBOOK}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.logingooglebackgroundcolor} onPress={() =>Loginwithgoogle(navigation)}>
                        <Image style={styles.image} source={require('../asset/google.png')} />
                        <Text style={styles.loginbtngoogle}>{string.LOGINWITHGOOGLE}</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 30
    },
    logintext: {
        marginTop: 30
    },
    inputemail: { marginTop: 12 },
    textlog: {
        fontSize: 30,
        color: "black",
        marginTop: 20,
        fontWeight: "bold"
    },
    subtext: {
        fontSize: 14,
        marginTop: 20
    },
    color: {
        color: Colors.red
    },
    inputView: {
        marginTop: 20,
        flexDirection: "row"
    },
    rememberview: {
        marginTop: 20,
        flexDirection: "row"
    },
    TextInput: {
        paddingLeft: 50,
        borderBottomWidth: 0.3,
        flex: 1,
        fontSize: 12
    },
    pleaseview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    inputicon: {
        marginTop: 15,
        position: "absolute",

    },
    loginBtn:
    {
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: Colors.primaryColor,
    },
    loginbtntext: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
     loginbtngoogle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.loginwithgoogle
    },
    loginfacebookcolor:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.textlogfacebook 
    },
    remember: {

        width: 12,
        height: 12,
        marginTop: 4,
        borderColor: Colors.light,
        borderWidth: 0.5,
    },
    textremem: {
        paddingLeft: 15,
        fontSize: 12
    },
    textforgot: {
        width: 100,
        fontSize: 12,
        marginTop: 10,
    },
    account: {
        marginTop: 20,
        textAlign: 'center',
        color: Colors.darkshadegray,
        fontWeight: "400"
    },
    textplease: {
        color: Colors.darkshadegray,
        fontWeight: "400"
    },
    textsignup: {
        color: Colors.primaryColor,
        fontWeight: "500",
        margin:2
    },
    loginfacebook: {
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
    },
loginfacebookbackgroundcolor:{
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: Colors.loginfacebookbackground
},
logingooglebackgroundcolor:{
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: Colors.loggooglebackground
},
    image: {
        alignItems: 'flex-start',
        width: 20,
        height: 20,
        margin: 20

    }
})
export default Login;

