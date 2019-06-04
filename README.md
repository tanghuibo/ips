## IPS

简洁的ip查看工具

------

### 传统的ifconfig

```bash
>>> ifconfig
enp3s0f1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 80:fa:5b:42:ac:cd  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
......
```
--------------
### IPS

```bash
>>> ips
IPv4 192.168.1.3
IPv6 240e:390:e56:1770:89c1:1218:5ac8:8c76
IPv6 240e:390:e56:1770:a5a6:85d2:db58:fe94
IPv6 fe80::3a2e:1647:2ecf:22f7
```
----------------------
### 安装

```bash
git clone https://github.com/tanghuibo/ips.git
cd ips
npm install . -g
```
