var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BFxumepiVGdNYOCNWykA9xRxEgTAVLJsFFWzACmBkaJBlv2Kk8zUnbpysOu6zcyVDlXTStvgNnm-Z2Cf5yYNKFY',
  privateKey: 'AzP61y1cpGA-UXLckAh22J5Vn8fBWKHdxZUcvZMa284'
}

push.setVapidDetails("mailto:test@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ekG0d5n8RoU:APA91bGzGueB8OGwGEKu9rda95bB1ACCEDInxnp2npUfmk3iIvhEe5aMBx4lJdXQCog9yRCeRQvQp6WuPKopDs1SqkTvT2n90ebJLI3N7wi8qWwW0k97PNUENAn2L-yAownV1pMTkWfa","expirationTime":null,"keys":{"p256dh":"BI8yp24z_GiJjIIw30V68y2tQAmc_JzCVbG-U8vai5j7BhYv-kYs5aHbvsEM4EOkTSxxYwSCiCftQ3hWtjtSQbA","auth":"BrrC8lG4c4dUrbt8hi6CuA"}}
// let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/cALOhAKxy8g:APA91bEYBnAMOlxgHmTbW_5-janXDOpcZm5GWrM7XGQM9a0Q0Wf7hizcEBwLB7nPFTicwOJe_C0nEmmbRZD0fuGv-sLbFJUNTkd-VEsBQy6PO6gr4DvH8uEizHF55sGA_AualHYVHGjf","expirationTime":null,"keys":{"p256dh":"BBRjP-7TYurFkYR1FNCZfa0KfMZzQ5I0I61DV1KYHZtR6MyO-3uXCSzXJ0qx83H87PpNltMzbnSRt33-R3cxvUc","auth":"-asIgF5_M8HqhKzWTZPdnQ"}}
push.sendNotification(sub, 'test message');