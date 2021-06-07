export  interface IHmsService {
    getAccessToken(clientId:number,appSecret:string): Promise<any>;

    sendPushNotification(message:any):Promise<any>;
 
}