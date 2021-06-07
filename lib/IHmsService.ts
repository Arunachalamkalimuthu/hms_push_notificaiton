export  interface IHmsService {

    getAccessToken(clientId:any,appSecret:any): Promise<any>;

    sendPushNotification(message:any): Promise<any>;
 
}