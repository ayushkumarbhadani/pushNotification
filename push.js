var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BETNiaiR42MdsoT85K-uWMJR4zQQMtXLu5AOwMIESOqX78hJtNkWzkVmB9lb_LFr8dln5100Rw5xO3wuNx00jgU',
    privateKey: '2QonMSDFNyFVb-eQ2w7ODK1daEinxU8kDXD70snmmo4'
}

push.setVapidDetails("mailto:ayushkumarbhadani@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dFnwDumwqMQ:APA91bHSrR_ihCvnXzdzXpo76vn442mAi0EoKozs1m58hTVDerGK2yk5BSaX08EZmC4T66rREzmhFY0flC5080dmKg1t8elZ-JTbnv6k2RQVBAtuTU_t10DIpNK5E2LE5A51bsMp5So5", "expirationTime": null, "keys": { "p256dh": "BN8NB28HQ2AHs24xoOIyvtVBa0ANvmoLmH503VGF5dq7B5GlDJVey1zlWTMhRxTmiO81oS1CXFSnqQS6MSZkJsk", "auth": "YrtVY4DUrQILBf7iaOmMRQ" } }
push / push.sendNotification(sub, 'test message');