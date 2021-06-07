"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
class HmsService {
    getAccessToken(clientId, appSecret) {
        try {
            let responseData;
            axios_1.default.post('https://oauth-login.cloud.huawei.com/oauth2/v3/token', querystring_1.default.stringify({
                grant_type: 'client_credentials',
                client_secret: appSecret,
                client_id: clientId
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Host": "oauth-login.cloud.huawei.com",
                }
            }).then(function (response) {
                responseData = response;
            });
            return responseData;
        }
        catch (error) {
            throw error;
        }
    }
    sendPushNotification(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessTokenRes = yield this.getAccessToken(104288077, 'b3dd48e9c77c9f2daeddecf8e4d5f5c103672b13f008581555268a379b868b0e');
            try {
                axios_1.default.post('https://push-api.cloud.huawei.com/v2/736430079244911188/messages:send', {
                    'message': message,
                    'validate_only': false,
                }, {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "Authorization": `Bearer ${accessTokenRes.access_token}`,
                    }
                }).then(function (response) {
                    console.log(response);
                    return response;
                });
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
}
exports.default = new HmsService();
//# sourceMappingURL=HmsService.js.map