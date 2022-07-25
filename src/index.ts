import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  rc.token = {access_token: process.env.TOKEN};
  const extInfo = await rc.restapi().account().extension().get();
  console.log(JSON.stringify(extInfo, null, 2));
};

main();
