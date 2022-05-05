import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
const Forgotpassword = ({ navigation }) => {

    const [Forgotpassword, setForgotPassword] = useState('');
    const [chForgotpassword, setchForgotpassword] = useState(true);
    const [ForgotpasswordValidError, setForgotpasswordValidError] = useState('');

    const handleForgotPassword = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (Forgotpassword == "" || Forgotpassword == undefined || Forgotpassword == null) {
            setForgotpasswordValidError('email address must be enter');
            setchForgotpassword(false);
            return false;
        } else if (!reg.test(Forgotpassword)) {
            setForgotpasswordValidError('enter valid email address');
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
            <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
            <View style={styles.logintext}>
                <Text style={styles.textlog}>Forgotpassword?</Text>
                <Text style={styles.subtext}>Welcome Home My Friend</Text>
            </View>

            <View style={styles.inputView}>
                <Icon name="mail-outline" size={15} style={styles.inputicon} />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setForgotPassword}
                    onEndEditing={handleForgotPassword}
                    testID="Forgot"
                />
            </View>
            <View>
                {chForgotpassword == true ? null : <Text style={{ color: "red" }}>{ForgotpasswordValidError}</Text>}
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { if (handleForgotPassword()) { navigation.replace("Signup") } }}>
                <Text style={styles.loginbtntext}>SUBMIT</Text>
            </TouchableOpacity>
            <Text style={styles.account}>Already  have an account ?</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.textplease}>Please</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.textsignup} testID="Logintest"> Login</Text>
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

})
export default Forgotpassword;
