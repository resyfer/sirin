# Sirin
[![npm version](https://badge.fury.io/js/sirin.svg)](https://badge.fury.io/js/sirin) ![size](https://badgen.net/npm/types/sirin) ![size](https://badgen.net/packagephobia/publish/sirin)

CLI to **instantly** share a directory and its contents to anyone connected to your network over HTTP, be it LAN or your hotspot. Doesn't require internet.

# Installation
Make sure you have NodeJS **(>= v16.14.0)** [installed](https://nodejs.org/en/) and have NPM as well
```
npm i -g sirin
```

# Usage
```
sirin
```

For further options, use the `-h` flag
```
sirin -h
```

and then you can visit the provided url on any device connected to your network. URL can be used to access the files.

If the exposed directory is `/home/ubuntu/hello` and the url is `http://192.16.188.40:3000`, then visiting `http://192.16.188.40:3000/hi/bye/foo.txt` will be equivalent to accessing `/home/ubuntu/hello/hi/bye/foo.txt`
