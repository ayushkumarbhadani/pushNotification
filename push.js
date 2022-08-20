var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eIy1mSYyCNE:APA91bE4SBinrewLadCOjcrBPzbdhnLywkM9Dym0L0Htk-jNfy7AirsD403fXhCMpThKEr-x3JMbV3-DPfW33w-dJf9kcCby1jkvhHIicrL0IaFwIF0jE_3e9yl9XA9ZhW4ojJZ7ZXOQ","expirationTime":null,"keys":{"p256dh":"BBOmLVeM42zffPvL2aA7IwY_Cjj_PIjW8Ks9pEU6xUjrZDrHfpdpcyiOK3rvBCOfTIEnZUFiK2qr2Wi5c7Rsq9I","auth":"pnBFcfFiE6F8nOu5VWyhQw"}}
// let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fT1SbFUOuxc:APA91bF2-SiC9wY-jtBb2k7r7ftyD_eLVhleD95Jm6S2gPhTlmhyozKjHUBJtX4KF1No0jQrNWZy0Izl5wzCw6l3ucfBQYP-iAWo1rFCxk_N2Oc2VyUmD0frz3ual5K0vJIcXaVAlQj2","expirationTime":null,"keys":{"p256dh":"BKXsRqBV2jvMW6jvdC43clCzXShbyV6hxkb1ggBV1h3h9a1XUAhwb4Rb4pzMzXMMIgjzTlwgWXNqQNngumi5V2I","auth":"kuKLvjlmNJVhlKhRkwT93A"}}
push.sendNotification(sub, 'test message');