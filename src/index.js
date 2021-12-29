const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const { uploadFile } = require('./Controllers/CsvFileUpload');

mongoose.connect('mongodb+srv://aman:aman@cluster0.yd8i9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(console.log('db connected'))

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
