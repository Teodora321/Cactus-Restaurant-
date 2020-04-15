const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';
const path = require('path')

module.exports = (app) => {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
  }

  app.use(bodyParser.json());
  app.use(cookieParser(secret));
};