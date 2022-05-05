import { View, Text, StyleSheet, TextInput, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            setnameValidError('Please Enter Name ');
            setchName(false);
            return false;
        } else if (!reg.test(name)) {
            setnameValidError('Enter Valid Name');
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
            setEmailValidError('Email Address Must Be Enter');
            setchEmail(false);
            return false;
        } else if (!reg.test(email)) {
            setEmailValidError('Enter Valid Email Address');
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
            setpasswordValidError('Password Must Be Enter');
            setchPassword(false);
            return false;
        } else if (!reg.test(Password)) {
            setpasswordValidError('Enter valid Password must contain atleast 8 character , capital & lowercase letter,special & numeric character');
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
            setPasswordRetypeValidError(' Enter Password Again');
            setchPasswordRetype(false);
            return false;
        } else if (repass != Password) {
            setPasswordRetypeValidError('Password And Retype Password must be same');
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
                <StatusBar style={styles.statusbarstyle}/>
                <View style={styles.logintext}>
                    <Text style={styles.textlog}>SIGN UP</Text>
                    <Text style={styles.subtext}>Welcome Home My Friend</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.inputView}>
                        <Icon name="person-outline" size={constantElement.size}  style={styles.inputicon} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Name"
                            onChangeText={setname}
                            onEndEditing={handleName}
                        />
                    </View>
                    <View>
                        {chName == true ? null :<Text style={{ color: "red" }}>{nameValidError}</Text>}
                    </View>
                </View>
                <View style={styles.inputView}>
                    <Icon name="mail-outline" size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        onEndEditing={handleValidEmail}
                        testID="Email"
                    />
                </View>
                <View>
                    {chEmail == true ? null :<Text style={{ color: "red" }}>{emailValidError}</Text>}
                </View>
                <View style={styles.inputView}>
                    <Icon name="lock-closed-outline" size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        onEndEditing={handlePassword}
                        testID="Password"

                    />

                </View>
                <View>
                    {chPassword == true ? null :<Text style={{ color: "red" }}>{passwordValidError}</Text>}
                </View>
                <View style={styles.inputView}>
                    <Icon name="lock-closed-outline" size={constantElement.size}  style={styles.inputicon} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password Retype"
                        secureTextEntry={true}
                        onChangeText={setPasswordRetype}
                        onEndEditing={handlePasswordRetype}
                    />
                </View>
                <View>
                    {chPasswordRetype == true ? null :<Text style={{ color: "red" }}>{PasswordRetypeValidError}</Text>}
                </View>
                <View style={styles.rememberview}>
                    <View style={styles.remember} />

                    <Text style={styles.textremem}>Terms & Conditions</Text>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    if (handleName() && handleValidEmail() && handlePassword() && handlePasswordRetype()) {
                        navigation.replace("Login")
                    }
                }}>
                    <Text style={styles.loginbtntext} testID="Signup">SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.account}>Already  have an account ?</Text>
                <View style={styles.loginview}>
                    <Text style={styles.textplease}>Please</Text>
                    <Text onPress={() => { navigation.navigate("Login") }} style={styles.textsignup} testID="Signuptest"> Login</Text>
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
        fontSize: 15,
        marginTop: 20
    },
    inputView: {

        marginTop: 15,
        flexDirection: "row"
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
        color: "#404040"
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
