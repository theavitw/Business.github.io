const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const fs = require('fs');
app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
    console.log("Hello from server");
    const file = fs.readFileSync('data.json')
    const data = {
        name: req.body.name, 
        Email: req.body.email,
        Message : req.body.Message

    }

    if (file.length == 0) {
        fs.writeFileSync("data.json", JSON.stringify([data]))
    
    } else {
        const json = JSON.parse(file.toString())
        json.push(data);
        fs.writeFileSync("data.json", JSON.stringify(json))

    }

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));