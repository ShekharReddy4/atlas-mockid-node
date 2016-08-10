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


### creating virtualhost in apache2 server

- Open "/etc/apache2/extra/httpd-vhosts.conf"
- Add a virtual host with document root pointing at atlas-mock-id. see below for reference
  ```bash
  Listen 3000
  <VirtualHost *:3000>
          DocumentRoot "/pathToYour/atlas-mock-id"
          ServerName atlasmock.local
          ErrorLog "/private/var/log/apache2/atlas.mock-auth-local-error_log"
          CustomLog "/private/var/log/apache2/atlas.mock-auth-local-access_log" common

          <Directory "/pathToYour/atlas-mock-id">
                  Options Indexes FollowSymLinks MultiViews
                  AllowOverride All
                  Order allow,deny
                  Allow from all
          </Directory>
  </VirtualHost>

  ```
- Listen command is to make apache listen on port 3000. Change is according to your configuration.

- Make sure port mentioned is same as for the field ID_HOST in .env file of openmrs atlas server.

  ```php
  'ID_HOST' => 'http://localhost:3000',
  ```
- Register your ServerName from above in "/etc/hosts".

- Use credential mentioned in config.php to login.
