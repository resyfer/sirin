import * as os from "node:os";

//https://askubuntu.com/a/723182
const ethernetRegex = /^((en).+|Ethernet$)/;
const wlanRegex = /^((wl).+|Wi-Fi$|Local Area .*$)/;

const LOCALHOST = "127.0.0.1";

let ip: string;

function setIP() {
  const devs = os.networkInterfaces();

  console.log(devs);

  const ips = [""];
  for (let dev in devs) {
    let i = 0;

    while (devs[dev]![i] && devs[dev]![i].family === "IPv6") {
      i++;
    }

    if (ethernetRegex.test(dev)) {
      devs[dev]![i].address !== LOCALHOST && (ips[0] = devs[dev]![i].address);
    } else if (wlanRegex.test(dev)) {
      devs[dev]![i].address !== LOCALHOST && (ips[1] = devs[dev]![i].address);
    }
  }

  // ip[0] => Ethernet
  // ip[1] => WLAN / Hotspot

  if (ips[0] !== "") {
    ip = ips[0];
  } else if (ips.length > 1) {
    ip = ips[1];
  } else {
    ip = LOCALHOST;
  }
}

export { ip, setIP };
