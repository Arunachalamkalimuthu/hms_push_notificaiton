export  interface IHmsService {

    getAccessToken(clientId:any,appSecret:any): Promise<any>;

    sendPushNotification(config:any,message:any): Promise<any>;
 
}