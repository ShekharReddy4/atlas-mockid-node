MOCK OpenMRS SERVER ATLAS LOGIN MODULE IN NODE
==============================================

Mock login module for OpenMrs Atlas Server (https://github.com/openmrs/openmrs-contrib-atlas).
This will help in mocking the login module required to login as OpenMrs user.

## configuration

In config.php update

```php
 $redirect_url = "http://openmrsatlas.local/"; //locally wherever openmrs atlas module is hosted
 $site_key = "localhost"; // same as in openmrs atlas server .env file settings
 $api_key = "1234567890abcdef"; // same as in openmrs atlas server .env file settings
```

- Use credential mentioned in config.php to login.


NOTE: I am Creating this repo to host a mock ID  for atlas in the heroku for testing purpose
