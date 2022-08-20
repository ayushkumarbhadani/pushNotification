var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dKRiFS8gWhY:APA91bFMwPN9xoB90fGRGhbrn6vEG3BRpGwe5ANXarw0uIHOSTLncoWYP1vSQ0emfsgHXIrVpFcly5Rb5le3Jo5-2Or7qeMydB5t2bX7Dg7fOwqP6-2fYrncGvJ4W2OBB5leReU_SHRp","expirationTime":null,"keys":{"p256dh":"BLU90NPnWbVTn5DpJZlwzFAt8s8RrTlMH9fvYQCRU04O7S8bbF8SUF939aSbRCV_0zfzQZPq-a0iXqQZYFVOiEo","auth":"jsGBuJlTfMd-B3CMlu4fjA"}}
// let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fT1SbFUOuxc:APA91bF2-SiC9wY-jtBb2k7r7ftyD_eLVhleD95Jm6S2gPhTlmhyozKjHUBJtX4KF1No0jQrNWZy0Izl5wzCw6l3ucfBQYP-iAWo1rFCxk_N2Oc2VyUmD0frz3ual5K0vJIcXaVAlQj2","expirationTime":null,"keys":{"p256dh":"BKXsRqBV2jvMW6jvdC43clCzXShbyV6hxkb1ggBV1h3h9a1XUAhwb4Rb4pzMzXMMIgjzTlwgWXNqQNngumi5V2I","auth":"kuKLvjlmNJVhlKhRkwT93A"}}
push.sendNotification(sub, 'test message');