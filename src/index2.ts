import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  rc.token = {access_token: process.env.TOKEN};
  const pubNubExtension = new PubNubExtension();
  await rc.installExtension(pubNubExtension);
  const subInfo = await rc
    .restapi()
    .subscription()
    .post({
      eventFilters: ['/restapi/v1.0/account/~/extension/~/message-store'],
      expiresIn: 3600,
      deliveryMode: {
        transportType: 'WebHook',
        address: 'https://07fc-67-188-100-185.ngrok.io/webhook',
      },
    });
  console.log(JSON.stringify(subInfo, null, 2));
};

main();
