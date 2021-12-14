const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const request = require('request');


exports.ocr = (req, res, next) => {
    var endpoint = "https://6177Final.cognitiveservices.azure.com/vision/v3.1/ocr";

    var imageUrl = req.body;
    console.log(imageUrl);
    


    request.post({
        method: 'post',
    uri: endpoint,
    qs: {
        'language': 'unk',
        'detectOrientation': 'true',
    },
    body: imageUrl,
    url: '/postocr',
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : key
    }
}, (error, response) => {
   // console.log(body);
    console.log(response.body);
  if (error) {
    console.log('Error: ', error);
    return;
  }
 jsonResponse = JSON.stringify(response.body, null, '  ');
  console.log('JSON Response\n');
//   console.log(jsonResponse);
res.json(response.body)


});
}

