import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import { useState } from "react";
import Colors from '../constant/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import constantElement from '../constant/constantElement';
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
            setEmailValidError('Email address must be enter');
            setchEmail(false);
            return false;
        } else if (!reg.test(email)) {
            setEmailValidError('Enter valid email address');
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
            setpasswordValidError('Password  must be enter');
            setchPassword(false);
            return false;
        } else if (!reg.test(Password)) {
            setpasswordValidError('Enter valid Password must contain atleast 8 character, capital & lowercase letter,special & numeric character');
            setchPassword(false);
            return false;
        } else {
            setpasswordValidError("");
            setchPassword(true);
            return true;
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
                <View style={styles.logintext}>
                    <Text style={styles.textlog}>Login</Text>
                    <Text style={styles.subtext}>Welcome Home My Friend</Text>
                </View>
                <View style={{ marginTop: 12 }}    >
                    <View style={styles.inputView}>
                        <Icon name="mail-outline" size={constantElement.size} style={styles.inputicon} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            onEndEditing={handleValidEmail}
                            testID="Emailtest"
                        />

                    </View>
                    <View>
                        {chEmail == true ? null : <Text style={{ color: "red" }} testID="error">{emailValidError}</Text>}
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Icon name="lock-closed-outline" size={constantElement.size} style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        onEndEditing={handlePassword}
                        testID="Passwordtest"

                    />
                </View>
                <View>
                    {chPassword == true ? null : <Text style={{color: Colors.red}}>{passwordValidError}</Text>}
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    if (handleValidEmail() && handlePassword()) {
                        navigation.replace("Signup")
                    }
                }}>
                    <Text style={styles.loginbtntext} testID="Signuptest">LOG IN</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <View style={styles.remember} />

                    <Text style={styles.textremem}>Remember Pasword</Text>

                </View>
                <Text onPress={() => { navigation.navigate("Forgotpassword") }} testID="Forgotpassword" style={styles.textforgot}>Forgot Pasword ?</Text>
                <Text style={styles.account}>Dont have an account ?</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.textplease}>Please</Text>
                    <Text onPress={() => { navigation.navigate("Signup") }} testID="Signup" style={styles.textsignup}> SIGN UP</Text>
                </View>
                <View>
                    <View style={{ ...styles.loginfacebook, backgroundColor: Colors.loginfacebookbackground }}>
                        <Image style={styles.image} source={require('../asset/facebook.png')} />
                        <Text style={{ ...styles.loginbtntext, color: Colors.textlogfacebook }}>LOG IN WITH FACEBOOK</Text>
                    </View>
                </View>
                <View>
                    <View style={{ ...styles.loginfacebook, backgroundColor: Colors.loggooglebackground }}>
                        <Image style={styles.image} source={require('../asset/google.png')} />
                        <Text style={{ ...styles.loginbtntext, color: "#ef3038" }}>LOG IN WITH GOOGLE</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 30
    },
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
        fontSize: 14,
        marginTop: 20
    },
    inputView: {
        marginTop: 20,
        flexDirection: "row"
    },
    TextInput: {
        paddingLeft: 50,
        borderBottomWidth: 0.3,
        flex: 1,
        fontSize: 12
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
        color: "#404040",
        fontWeight: "400"
    },
    textplease: {
        color: "#404040",
        fontWeight: "400"
    },
    textsignup: {
        color: Colors.primaryColor,
        fontWeight: "500"
    },
    loginfacebook: {
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
    },
    image: {
        alignItems: 'flex-start',
        width: 20,
        height: 20,
        margin: 20

    }
})
export default Login;

