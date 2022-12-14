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