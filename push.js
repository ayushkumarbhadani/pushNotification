var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fU3-kPDcmlo:APA91bHXSEkyzQY9AWexby3K6keU9cVYzfdfqwqjkttiLjA-IBaRx4wspzKU8lyYrGg3Wproz9_t6VM5kqx4fyA5hXDipaF-_bdEAg89aLH15ST4zQymd90yOIMhdN9lhaQPXf-ZHLg4","expirationTime":null,"keys":{"p256dh":"BJLRa6REPdneASfmZoljsZ80b6o-dywn1CjYyA9Vqh37pz2l1QHOpKiQJ5ngzhgdLPN9nYBZVQfOYJQ1XRYmrl4","auth":"p0GQaduQTv5QIjsAFOHZgA"}}
let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fT1SbFUOuxc:APA91bF2-SiC9wY-jtBb2k7r7ftyD_eLVhleD95Jm6S2gPhTlmhyozKjHUBJtX4KF1No0jQrNWZy0Izl5wzCw6l3ucfBQYP-iAWo1rFCxk_N2Oc2VyUmD0frz3ual5K0vJIcXaVAlQj2","expirationTime":null,"keys":{"p256dh":"BKXsRqBV2jvMW6jvdC43clCzXShbyV6hxkb1ggBV1h3h9a1XUAhwb4Rb4pzMzXMMIgjzTlwgWXNqQNngumi5V2I","auth":"kuKLvjlmNJVhlKhRkwT93A"}}
push.sendNotification(sub, 'test message');