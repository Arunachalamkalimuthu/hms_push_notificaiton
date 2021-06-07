import axios from 'axios';
import querystring from 'querystring';
import {IHmsService} from './IHmsService';


class HmsService implements IHmsService {

    async getAccessToken(clientId: any, appSecret: any): Promise<any> {
        try {
            const {data} = await axios.post('https://oauth-login.cloud.huawei.com/oauth2/v3/token',
                querystring.stringify({
                    grant_type: 'client_credentials',
                    client_secret: appSecret,
                    client_id: clientId
                }), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Host": "oauth-login.cloud.huawei.com",
                    }
                });
            return data
        } catch (error) {
            throw error

        }
    }

    async sendPushNotification(config: any, message: any): Promise<any> {
        if (!config.clientId) {
            throw Error('Please provide the clientId');
        }
        if (!config.appSecret) {
            throw Error('Please provide the appSecret');
        }

        if (!config.projectId) {
            throw Error('Please provide the projectId');
        }
        const accessTokenRes: any = await this.getAccessToken(config.clientId, config.appSecret);
        try {

            axios.post(`https://push-api.cloud.huawei.com/v2/${config.projectId}/messages:send`,
                {
                    'message': message,
                    'validate_only': false,
                }, {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "Authorization": `Bearer ${accessTokenRes.access_token}`,
                    }
                }).then(function (response) {
                return response;
            });
        } catch (error) {
            return error

        }
    }
}

export default new HmsService();
 


