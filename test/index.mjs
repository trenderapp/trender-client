import Client from '../dist/index';

const token = "text";
const client = new Client({
    token: token
});

client.post.create()