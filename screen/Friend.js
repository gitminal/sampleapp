import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { View, Text } from 'react-native'
import React from 'react'

const Friend = () => {
    return (
        <View>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {

                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    let accessToken = data.accessToken
                                    console.log(accessToken.toString())

                                    const responseInfoCallback = (error, result) => {
                                        if (error) {
                                            console.log(error)
                                            console.log('Error fetching data: ' + error.toString());
                                        } else {
                                            console.log(result)
                                            console.log('Success fetching data: ' + result.toString());
                                        }
                                    }

                                    const infoRequest = new GraphRequest(
                                        '/me',
                                        {
                                            accessToken: accessToken,
                                            parameters: {
                                                fields: {
                                                    string: 'email,name,first_name,last_name,invitable_friends'
                                                }
                                            }
                                        },
                                        responseInfoCallback
                                    );

                                    new GraphRequestManager().addRequest(infoRequest).start()

                                }
                            )

                        }
                    }
                }
                />
        </View>
    )
}

export default Friend;


