const axios = require('axios');

async function makeGetRequest() {

    let payload = { queryText:'assalamu'alaikum', sessionId: 'abs2342cd1234', languageCode:'id' };

    let res = await axios.post('https://621f-13-229-66-36.ngrok.io/dialogflow', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();
