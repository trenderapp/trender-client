<div align="center">
<br />
<h1>Trender Client</h1>
<br />
<p>
<a  href="https://www.npmjs.com/package/trender-client"><img  src="https://img.shields.io/npm/v/trender-client.svg?maxAge=3600"  alt="NPM version" /></a> <a  href="https://www.npmjs.com/package/trender-client"><img  src="https://img.shields.io/npm/dt/trender-client.svg?maxAge=3600"  alt="NPM downloads" /></a> <a  href="https://www.npmjs.com/package/trender-client"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/snyk/vulnerabilities/npm/trender-client"></a> <a  href="https://www.npmjs.com/package/trender-client"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/bundlephobia/min/trender-client"></a> <a  href="https://www.npmjs.com/package/trender-client"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/npm/l/trender-client"></a>
</p>
</div>

# trender-client
Official Trender client made in Typescript

## Easy to use :

```js
import Client from 'trender-client';

const client = new Client({
    token: "your token"
})

const current_user = await client.informations();

console.log(current_user)
```