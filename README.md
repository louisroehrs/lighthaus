# lighthaus
Control your WS2182 leds with a browser and RaspberryPi.  Great for parties and really loud band nights!

Run ./start.sh to run the webserver that hosts the controlling page.  Any server will do, I am using my raspberry pi.


On a Chrome browser or using the WEBBLE iOS app, browse to https://<ip of your hosting server>:14443 and you should see the control panel.

Click Find LEDS to find your bluetooth enabled LEDs.  Pair with them.
Then click the buttons to activate modes or colors to set a static color.

If you want to control them with your iPhone over bluetooth, go over to http://github.com/louisroehrs/pivi 
(Ok, more to come, and it's been a hit at parties.)


TLS instructions
https://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/
Do export HOST=<IP> before running.
