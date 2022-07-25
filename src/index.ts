import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';
import waitFor from 'wait-for-async';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  rc.token = {access_token: process.env.TOKEN};
  const pubNubExtension = new PubNubExtension();
  await rc.installExtension(pubNubExtension);
  await pubNubExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    body => {
      console.log(JSON.stringify(body, null, 2));
    }
  );

  await waitFor({interval: 999999});
};

main();
