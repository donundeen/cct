#put in init.d
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin
sudo cd /home/pi/cct/sb_wifi
sudo git pull
forever start /home/pi/cct/sb_wifi/serial_to_spacebrew.js >> /home/pi/cct/sb_wifi/serial_to_spacebrew.log
