const express = require('express');
const connectToDB = require('./db');
const bodyParserMiddleware = require('./middlewares/bodyParser');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const authRoutes = require('./routes/authRoutes')
connectToDB();
app.use(bodyParserMiddleware)
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
}))

app.use('/',userRoutes)
app.use('/',chatRoutes)
app.use('/',authRoutes)

app.listen(5000, () => {
  console.log('Server started at port 5000');
});
