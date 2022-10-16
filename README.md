# Sirin
![npm](https://img.shields.io/npm/v/sirin?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/sirin?color=%23a020f0&style=for-the-badge) ![NPM](https://img.shields.io/npm/l/sirin?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/resyfer/sirin?style=for-the-badge) ![Lines of code](https://img.shields.io/tokei/lines/github/resyfer/sirin?style=for-the-badge)

[![NPM](https://nodei.co/npm/sirin.png)](https://www.npmjs.com/package/sirin)

CLI to **instantly** share a directory and its contents to anyone connected to your network over HTTP, be it LAN or your hotspot. Doesn't require internet.

# Installation
Make sure you have NodeJS **(>= v16.14.0)** [installed](https://nodejs.org/en/) and have NPM as well
```
npm i -g sirin
```

# Usage

https://user-images.githubusercontent.com/74897008/196028080-a67900cc-926b-4bb5-8794-b01781ad8946.mp4


```
sirin
```

and then you can visit the provided url on any device connected to your network. URL can be used to access the files.

If the exposed directory is `/home/ubuntu/hello` and the url is `http://192.16.188.40:3000`, then visiting `http://192.16.188.40:3000/hi/bye/foo.txt` will be equivalent to accessing `/home/ubuntu/hello/hi/bye/foo.txt`


For further options, use the `-h` flag
```
sirin -h
```
