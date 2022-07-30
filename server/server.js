const express = require('express');
const app = express();
const port = 3001;

const fs = require('fs');

const cors = require('cors');

const PythonShell = require('python-shell').PythonShell;
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Backend Land');
    }
);

app.post('/problemo/', (req, res) => {
    // fs.writeFileSync('twosum.py', JSON.stringify(req.body.code));
    fs.writeFileSync('twosum.py', req.body.code);
    
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
    };

    PythonShell.run('Test.py', options, function (err, results) {
        if (err) {
            console.log(err);
            res.json({testCaseResult: "Failed", err: err});
        }
        else{
            res.json({testCaseResult: results[0]});

        }
        // results is an array consisting of messages collected during execution
        // console.log('results: %j', results);
        // res.send(results);
    });
    
    // res.send('Success');
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('http://localhost:3001/');
});