
import messaging from '@react-native-firebase/messaging';

export const notificationlistener = async() => {
 
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification from background state:',remoteMessage.notification,);
         });
        messaging().onMessage(async remoteMessage => {
            console.log(' foreground ', JSON.stringify(remoteMessage.notification));
          });

      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          // console.log(
          //   'Notification  from quit state:',
          //   remoteMessage.notification,
          // );
         
          }
})}