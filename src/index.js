const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');
const multer = require('multer');
const { uploadFile } = require('./Controllers/CsvFileUpload');

 connect('mongodb://aakash:aakash@cluster0-shard-00-00.kvzzj.mongodb.net:27017,cluster0-shard-00-01.kvzzj.mongodb.net:27017,cluster0-shard-00-02.kvzzj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-84hv7r-shard-0&authSource=admin&retryWrites=true&w=majority'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
.then(console.log('db connected'))
.catch(err => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3003;

// app.use('/uploads', express.static('/uploads'));

// app.use('/uploads*', (req, res, next) => {
//     try {
//       res.sendFile(__dirname + '/uploads' + req.params[0]);
//       res.send('working');
  
//     } catch (error) {
//       next();
//     }
//   });

  const upload = multer();
  app.post("/files", upload.single("file"),uploadFile)

  app.listen(PORT, (err) => {
    if (err) {
    console.log(err);
    }
    console.log(`App is running ${PORT}`);
});
