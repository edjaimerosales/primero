const express = require('express')
const app = express()
var port=process.env.PORT ||3000;

app.get('/', function (req, res) {
  res.send('\t Muy buenas noches amor :3 \n\t Que tengas una muy bonita noche :3 <3  \n\t Te amo muchisimo!! :3 <3  \n\t Jaime Ortega :3 <3  \n\t Un dia menos :3 <3')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
