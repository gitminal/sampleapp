import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
  export const Loginwithgoogle = async(navigation) => {
    GoogleSignin.configure()

      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // console.log("userinfo",userInfo);
        navigation.navigate("Dashboard");
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // console.log(error);
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // console.log(error);
      } else {
          // console.log(error);
      }
      }
    };


export default Loginwithgoogle