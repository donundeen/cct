#put in init.d
#!/bin/bash
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin
/usr/bin/sudo cd /home/pi/cct/sb_wifi
/usr/bin/sudo /usr/bin/git pull
/usr/local/bin/forever start /home/pi/cct/sb_wifi/serial_to_spacebrew.js >> /home/pi/cct/sb_wifi/serial_to_spacebrew.log
