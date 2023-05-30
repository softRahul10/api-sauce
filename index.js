const express = require('express');

const  app = express();

app.get('/random/:min/:max', (req,res) => {
    let minNumber = parseInt(req.params.min);
    let maxNumber = parseInt(req.params.max);
    
    if(isNaN(minNumber) || isNaN(maxNumber)) {
        res.status(400);
        res.json({ error: 'Bad Request' });
        return;
    }

    var result = Math.round((Math.random() * (maxNumber - minNumber)) + minNumber); 
    res.json({ result: result }); 

});

app.listen(3000,() =>  console.log('Server listening on port number 3000'));