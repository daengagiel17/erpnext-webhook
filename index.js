const express = require('express')
const app = express()
// const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Run erpnext webhooks')
})

app.post('/mission-order', (req, res) => {
    console.log('Data mission order:' + JSON.stringify(req.body));
    res.send('Success')
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})