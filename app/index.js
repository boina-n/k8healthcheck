const express = require("express");
const fs = require("fs");

const PvBaseDir = process.env.PvBaseDir;
const app = express();
const port = 8080;

app.get("/pv/:pvc", (req, res) => {
  fs.access(`${PvBaseDir}` + req.params.pvc, fs.constants.F_OK, (err) => {
    console.log(`${PvBaseDir} ${err ? "does not exist" : "exists"}`);
    if (err) {
      res.send("directory doesn't exist");
    } else {
      fs.writeFile(
        `${PvBaseDir}` + req.params.pvc + "/file.txt",
        req.params.pvc,
        function (err) {
          if (err) throw err;
        }
      );
      fs.readFile(
        `${PvBaseDir}` + req.params.pvc + "/file.txt",
        (err, data) => {
          if (err) throw err;
          const txt = data.toString();
          res.send("ok");
        }
      );
    }
  });
});

app.get("/health", (req, res, err) => {
    res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
