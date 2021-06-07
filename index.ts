import paymentController from '@lib/HmsService';
paymentController.sendPushNotification(

{
    
        "data": "{'param1':'value1','param2':'value2'}",
        "notification": {
            "title": "title",
            "body": "body"
        },
        "android": {
        "notification": {
                "title": "android title",
                "body": "android body",
                "click_action": {
                    "type": 1,
                    "intent": "intent://com.huawei.codelabpush/deeplink?#Intent;scheme=pushscheme;launchFlags=0x04000000;i.age=180;S.name=abc;end"
                }
            }
        },
        "token": [
            "IQAAAACy0htoAACfi7GvwXiTflj6vow-XJ4gsQYPBfqvy8mgYkLHMUwuPyKaeQgfXkIvS22A-mNj-gm1DxQFclXRH7Fvs2Lk1xKk0GBwdPxE7SGhbg"
        ]
    
}

)




