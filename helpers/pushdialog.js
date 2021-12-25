const axios = require('axios');

async function makeGetRequest() {

    const  payload = { queryText:'assalamu'alaikum', sessionId: 'abs2342cd1234', languageCode:'id' };

    const  res = await axios.post('https://621f-13-229-66-36.ngrok.io/dialogflow', payload);

    let data = res.data;
    return data;
    console.log(data);
}
module.exports = {
makeGetRequest;
}
