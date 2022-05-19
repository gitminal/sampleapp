import { LoginManager } from "react-native-fbsdk";

export const Loginwithfacebook =  (navigation) =>{
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        function (result) {
        if (result.isCancelled) {
            // console.log("Login Cancelled " + JSON.stringify(result))
        } else {
        navigation.navigate("Dashboard"); 
        }
        },
        function (error) {
        // alert("Login failed with error: " + error);
        }
        )
        }