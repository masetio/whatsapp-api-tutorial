const axios = require('axios');
const makeGetRequest = async   {

    const  payload1 = { queryText:'assalamu'alaikum', sessionId: 'abs2342cd1234', languageCode:'id' };

    const  res = await axios.post('https://621f-13-229-66-36.ngrok.io/dialogflow', payload1);

    let data = res.data;
    return data;
    console.log(data);
}
module.exports = {
makeGetRequest;
}
