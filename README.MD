hms-notification [![NPM version](https://badge.fury.io/js/fcm-node.svg)](http://badge.fury.io/js/fcm-node)
========
A Node.JS simple interface to Haewei's Push Kit (HMS). Supports both android,web and iOS, including topic messages, and parallel calls.
## Installation

Via [npm][1]:

    $ npm install hms_push_notification



## Guide

hms_push_notification allows you to use HTTPS to access its server and send uplink messages and downlink messages. This section describes the downlink messaging.

The following figure shows the HTTPS-based downlink messaging process.



![alt text](https://github.com/arunabimanyu7/hms_push_notificaiton/blob/master/guide/flowchart.png?raw=true)


## Usage

    var hmsService = require('hms_push_notification');

    hmsService.sendPushNotification(
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






## License

Copyright (c) 2020-2021 Arunachalam kalimuthu

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: http://github.com/arunabimanyu7/npm
[2]: https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-server-dev-0000001050040110
[4]: mailto:nandar.rustam@gmail.com
[5]: https://github.com/h2soft/node-gcm
[6]: http://www.gnu.org/licenses/lgpl-3.0.txt
[7]: https://github.com/nandarustam/fcm-push
[8]: https://firebase.google.com/docs/cloud-messaging/concept-options
[9]: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/APNsProviderAPI.html#//apple_ref/doc/uid/TP40008194-CH101-SW2
[10]: https://firebase.google.com/docs/cloud-messaging/http-server-ref

