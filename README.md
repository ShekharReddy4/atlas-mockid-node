MOCK OpenMRS SERVER ATLAS LOGIN MODULE IN NODE
==============================================

[![devDependencies Status](https://david-dm.org/alanshaw/david-www/dev-status.svg)](https://david-dm.org/alanshaw/david-www?type=dev) [![devDependencies Status](https://david-dm.org/ShekharReddy4/atlas-mockid-node.svg)](https://github.com/ShekharReddy4/atlas-mockid-node/blob/master/package.json)  [![chatroom icon](https://patrolavia.github.io/telegram-badge/chat.png)](https://telegram.me/shekharreddy)

Mock login module for OpenMrs Atlas Server (https://github.com/openmrs/openmrs-contrib-atlas).
This will help in mocking the login module required to login as OpenMrs user.

## configuration

In app.js update

```js
 $redirect_url = "http://localhost:3001/"; //locally wherever openmrs atlas server is hosted
 $site_key = "localhost"; // same as in openmrs atlas server (recommended: don't change this)
 $api_key = "1234567890abcdef"; // same as in openmrs atlas server (recommended: don't change this)
```

- Use credential mentioned in app.js to login.


NOTE: I am Creating this repo to host a mock ID  for atlas in heroku for testing purpose

# To use this with SSO-Demo

Jus Clone the repo and run using nodemon. (if the port specified is occupied the change the port [here](https://github.com/ShekharReddy4/atlas-mockid-node/blob/master/app.js#L67) )