<p align="center">Official Trender client for node.js</p>

<p align="center">
    <a href="https://trenderapp.com/"><b>Website</b></a> •
    <a href="https://doc.trenderapp.com"><b>Documentation</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/trender-client.svg?style=flat-square)](https://www.npmjs.org/package/trender-client)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/trender-client/trender-client)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=trender-client&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=trender-client)
[![npm downloads](https://img.shields.io/npm/dm/trender-client.svg?style=flat-square)](https://npm-stat.com/charts.html?package=trender-client)
[![gitter chat](https://img.shields.io/gitter/room/mzabriskie/trender-client.svg?style=flat-square)](https://gitter.im/mzabriskie/trender-client)
[![Known Vulnerabilities](https://snyk.io/test/npm/trender-client/badge.svg)](https://snyk.io/test/npm/trender-client)

</div>

# trender-client

Official Trender client made in Typescript

## Easy to use

```js
import Client from 'trender-client';

const client = new Client({
    token: "your token"
})

const current_user = await client.informations();

console.log(current_user)
```
