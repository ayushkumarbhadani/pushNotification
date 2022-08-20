var push = require('web-push');

// let vapidKeys=push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys={
    publicKey: 'BETNiaiR42MdsoT85K-uWMJR4zQQMtXLu5AOwMIESOqX78hJtNkWzkVmB9lb_LFr8dln5100Rw5xO3wuNx00jgU',
    privateKey: '2QonMSDFNyFVb-eQ2w7ODK1daEinxU8kDXD70snmmo4'
}

push.setVapidDetails("mailto:ayushkumarbhadani@gmail.com",vapidKeys.publicKey, vapidKeys.privateKey);

let sub={}
push/push.sendNotification(sub, 'test message');