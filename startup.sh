#put in init.d
#!/bin/bash
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin
cd /home/pi/cct/sb_wifi
/usr/bin/sudo /usr/bin/git pull
/usr/local/bin/forever start -o /home/pi/cct/sb_wifi/serial_to_spacebrew_forever.log -e /home/pi/cct/sb_wifi/serial_to_spacebrew_forever_error.log /home/pi/cct/sb_wifi/serial_to_spacebrew.js >> /home/pi/cct/sb_wifi/serial_to_spacebrew.log
