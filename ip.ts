import os from "node:os";

//https://askubuntu.com/a/723182
const ethernetRegex = /^(en).+/;
const wlanRegex = /^(wl).+/;

const LOCALHOST = "127.0.0.1";

function getIP(): string {
  const devs = os.networkInterfaces();

  // console.log(devs);

  const ips = [""];
  for (let dev in devs) {
    let i = 0;

    while (devs[dev]![i] && devs[dev]![i].family === "IPv6") {
      i++;
    }

    if (ethernetRegex.test(dev)) {
      ips[0] = devs[dev]![i].address;
    } else if (wlanRegex.test(dev)) {
      ips[1] = devs[dev]![i].address;
    }
  }

  if (ips[0] !== "") {
    return ips[0];
  } else if (ips.length > 1) {
    return ips[1];
  } else {
    return LOCALHOST;
  }
}

export { getIP };
