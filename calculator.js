const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  let input1 = Number(req.body.num1);
  let input2 = Number(req.body.num2);

  let result = input1 + input2;

  res.send("The result of the calculation is :" + result);
});

app.listen(3000, () => {
  console.log("Si existe una conexión con el servidor");
});
