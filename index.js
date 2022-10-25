const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// CREATE API
app.get('/', (req, res) => {
    res.send(`API IS RUNNING!`);
});




app.listen(port, () => {
    console.log(`Your Created Server Is Working On PORT: ${ port }`);

})
