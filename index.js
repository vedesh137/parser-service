const express = require('express')
const path = require('path')
const multer  = require('multer')
const upload = multer({storage: multer.memoryStorage()})
const { parse } = require('./parser');
const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/parseForm', upload.single('file'), async (req, res)=>{
    const { parsedText, ...data} = await parse(req.file.buffer);
    res.render('pages/result', {data, parsedText});
  })
  .post('/parse', upload.single('file'), async (req, res)=>{
    const data = await parse(req.file.buffer);
    res.send(data);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
