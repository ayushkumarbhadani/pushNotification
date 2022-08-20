var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eIy1mSYyCNE:APA91bE4SBinrewLadCOjcrBPzbdhnLywkM9Dym0L0Htk-jNfy7AirsD403fXhCMpThKEr-x3JMbV3-DPfW33w-dJf9kcCby1jkvhHIicrL0IaFwIF0jE_3e9yl9XA9ZhW4ojJZ7ZXOQ","expirationTime":null,"keys":{"p256dh":"BBOmLVeM42zffPvL2aA7IwY_Cjj_PIjW8Ks9pEU6xUjrZDrHfpdpcyiOK3rvBCOfTIEnZUFiK2qr2Wi5c7Rsq9I","auth":"pnBFcfFiE6F8nOu5VWyhQw"}}
let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/cALOhAKxy8g:APA91bEYBnAMOlxgHmTbW_5-janXDOpcZm5GWrM7XGQM9a0Q0Wf7hizcEBwLB7nPFTicwOJe_C0nEmmbRZD0fuGv-sLbFJUNTkd-VEsBQy6PO6gr4DvH8uEizHF55sGA_AualHYVHGjf","expirationTime":null,"keys":{"p256dh":"BBRjP-7TYurFkYR1FNCZfa0KfMZzQ5I0I61DV1KYHZtR6MyO-3uXCSzXJ0qx83H87PpNltMzbnSRt33-R3cxvUc","auth":"-asIgF5_M8HqhKzWTZPdnQ"}}
push.sendNotification(sub, 'test message');