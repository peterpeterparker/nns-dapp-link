import "./style.css";
import qrcode from "/qrcode.png";
import onchain from "/onchain.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="${qrcode}" class="qrcode" alt="A QR code that contains a link to NNS dapp" />
    <h1><a href="https://nns.ic0.app" rel="noopener noreferrer" target="_blank">👉 https://nns.ic0.app</a> </h1>
    <img src="${onchain}" class="onchain" role="presentation" alt="100% on chain logo" />
  </div>
`;
