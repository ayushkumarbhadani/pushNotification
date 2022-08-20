var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fU3-kPDcmlo:APA91bHXSEkyzQY9AWexby3K6keU9cVYzfdfqwqjkttiLjA-IBaRx4wspzKU8lyYrGg3Wproz9_t6VM5kqx4fyA5hXDipaF-_bdEAg89aLH15ST4zQymd90yOIMhdN9lhaQPXf-ZHLg4","expirationTime":null,"keys":{"p256dh":"BJLRa6REPdneASfmZoljsZ80b6o-dywn1CjYyA9Vqh37pz2l1QHOpKiQJ5ngzhgdLPN9nYBZVQfOYJQ1XRYmrl4","auth":"p0GQaduQTv5QIjsAFOHZgA"}}
push.sendNotification(sub, 'test message');