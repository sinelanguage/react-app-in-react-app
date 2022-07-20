const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const PARENT_APP_STATIC_BUILD_PATH = (path.join(__dirname, '../parent-app/build'));
const CHILD_APP_STATIC_BUILD_PATH = (path.join(__dirname, '../child-app/build'));

app.use(express.static(PARENT_APP_STATIC_BUILD_PATH))
app.use(express.static(CHILD_APP_STATIC_BUILD_PATH))

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})