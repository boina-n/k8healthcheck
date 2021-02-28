const express = require('express')
const fs = require('fs');

const app = express()
const port = 8080

app.get('/', (req, res) => {
    //res.send('Hello World!')
    fs.writeFile('helloworld.txt', new Date().toString() , function (err) {
        if (err) throw err;
      });

    fs.readFile('helloworld.txt', (err, data) => {
        if (err) throw err;
        const txt = data.toString()
        res.send(txt);
      });
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
