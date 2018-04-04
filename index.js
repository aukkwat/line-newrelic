const EXPRESS = require('express');
const BODY = require('body-parser');
const APP = EXPRESS();
const PORT = 3000;

// Condition Limit Body 5 MB per Request
APP.use(BODY.json({ limit: '5mb' }));

// Condition Limit
APP.use(BODY.urlencoded ({ limit: '5mb', extended: true }));

// Function CallBack (Request and Response)
function CALLBACK(request, response) {
    console.log(request);
    response.send(request.payload);
}

// Scrape Method Post Path /
APP.post('/', CALLBACK );

// Expose Port
APP.listen(PORT, function () {
});
