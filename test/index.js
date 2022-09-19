const Client = require('../dist/index');

const token = "MTY2MjIxNTE4MTkwNw.redyxd3NsKEsG9YnrcwQ.K4Anoq";
const client = new Client.default({
    token: token
});

client.ws.connect()