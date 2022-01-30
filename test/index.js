const Client = require('../dist/index').default;

const token = "text";
const client = new Client(token);

client.user.follow.create("")