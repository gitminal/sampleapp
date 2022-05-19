import { View, Text, StyleSheet, TextInput, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import string from '../constant/string';
import constantElement from '../constant/constantElement';
const Signup = ({ navigation }) => {
    const [name, setname] = useState('');
    const [chName, setchName] = useState(true);
    const [nameValidError, setnameValidError] = useState('');

    const [email, setEmail] = useState('');
    const [chEmail, setchEmail] = useState(true);
    const [emailValidError, setEmailValidError] = useState('');

    const [Password, setPassword] = useState('');
    const [chPassword, setchPassword] = useState(true);
    const [passwordValidError, setpasswordValidError] = useState('');

    const [PasswordRetype, setPasswordRetype] = useState('');
    const [chPasswordRetype, setchPasswordRetype] = useState(true);
    const [PasswordRetypeValidError, setPasswordRetypeValidError] = useState('');
    const handleName = () => {
        var reg = /^[a-zA-Z ]{2,40}$/;

        if (name == "" || name == undefined || name == null) {
            setnameValidError(string.PleaseEnterName);
            setchName(false);
            return false;
        } else if (!reg.test(name)) {
            setnameValidError(string.EnterValidName);
            setchName(false);
            return false;
        } else (name == name)
        {
            setchName(true);
            setnameValidError("");
            return true;
        }
    };

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
        let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
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
    const handlePasswordRetype = () => {
        var repass = PasswordRetype.trim();
        if (repass == "" || repass == undefined || repass == null) {
            setPasswordRetypeValidError(string.PleaseEnterPasswordAgain);
            setchPasswordRetype(false);
            return false;
        } else if (repass != Password) {
            setPasswordRetypeValidError(string.PasswordAndRetypePasswordmustbesame);
            setchPasswordRetype(false);
            return false;
        } else (repass == Password)
        {
            setchPasswordRetype(true);
            setPasswordRetypeValidError("");
            return true;
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <StatusBar  backgroundColor={Colors.statusbarbackground} />
                <View style={styles.logintext}>
                    <Text style={styles.textlog}>{string.SIGNUP}</Text>
                    <Text style={styles.subtext}>{string.WelcomeHomeMyFriend}</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.inputView}>
                        <Icon name={string.name} size={constantElement.size}  style={styles.inputicon} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder={string.Name}
                            onChangeText={setname}
                            onEndEditing={handleName}
                        />
                    </View>
                    <View>
                        {chName == true ? null : <Text style={styles.color}>{nameValidError}</Text>}
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Icon name={string.email} size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder={string.Email}
                        autoCorrect={false}
                        autoCapitalize={string.none}
                        onChangeText={setEmail}
                        onEndEditing={handleValidEmail}
                        testID="Email"
                    />
                </View>
                <View>
                    {chEmail == true ? null : <Text style={styles.color}>{emailValidError}</Text>}
                </View>
                <View style={styles.inputView}>
                    <Icon name={string.password} size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder={string.Password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        onEndEditing={handlePassword}
                        testID="Password"

                    />

                </View>
                <View>
                    {chPassword == true ? null : <Text style={styles.color}>{passwordValidError}</Text>}
                </View>
                <View style={styles.inputView}>
                    <Icon name={string.password} size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder={string.PasswordRetype}
                        secureTextEntry={true}
                        onChangeText={setPasswordRetype}
                        onEndEditing={handlePasswordRetype}
                    />
                </View>
                <View>
                    {chPasswordRetype == true ? null : <Text style={styles.color}>{PasswordRetypeValidError}</Text>}
                </View>
                <View style={styles.rememberview}>
                    <View style={styles.remember} />

                    <Text style={styles.textremem}>{string.TermsConditions}</Text>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    if (handleName() && handleValidEmail() && handlePassword() && handlePasswordRetype()) {
                        navigation.navigate("Dashboard")
                    }
                }}>
                    <Text style={styles.loginbtntext} testID="Signup">{string.SIGNUP}</Text>
                </TouchableOpacity>
                <Text style={styles.account}>{string.Alreadyhaveanaccount}</Text>
                <View style={styles.loginview}>
                    <Text style={styles.textplease}>{string.Please}</Text>
                    <Text onPress={() => { navigation.navigate("Login") }} style={styles.textsignup} testID="Signuptest">{string.Login}</Text>
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
    input:{ marginTop: 15 },
    inputView: {

        marginTop: 15,
        flexDirection: "row"
    },
    color:{
        color:Colors.red
    },
    TextInput: {
        paddingLeft: 50,
        borderBottomWidth: 0.5,
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
        marginTop: 40,
        backgroundColor: Colors.primaryColor,
    },
    loginbtntext: {
        color: "white",
        fontSize: 20,
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
        paddingLeft: 10,
        fontSize: 13
    },
    textforgot: {
        marginTop: 12,
        fontSize: 12
    },
    account: {
        marginTop: 20,
        textAlign: 'center',
        color: Colors.darkshadegray
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
        height: 50,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 10,
        backgroundColor: Colors.primaryColor,
        flexDirection: "row",
    },
    image: {
        alignItems: 'flex-start',
        width: 20,
        height: 20,
    },
    loginview:{
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center" 
    },
    rememberview:
    { marginTop: 20, flexDirection: "row", },
    statusbar:
        { marginTop: 20, flexDirection: "row", }
    
})
export default Signup;
