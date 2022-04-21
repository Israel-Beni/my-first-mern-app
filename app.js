const express = require('express');
app = express();

// Listen on server
app.listen(process.env.PORT || 3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started at port 3000")
    }
} );