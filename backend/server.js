import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fetch from 'node-fetch'

// App config
const app = express();
const port = process.env.PORT || 9004
dotenv.config()

// Middlewares
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connection successfull!!")).catch(err => console.log(err))

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/api/browse', async (req, res, next) => {
    const api_url = `https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&releaseTime=gte-1631145600&country=FR`;
    try {
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();   
        res.json(json);
    } catch (error) {
        next(error)
    }
});

app.get('/detailproduct/:urlKey', async (req, res, next) => {
    const urlKey = req.params.urlKey;
    const api_url = `https://stockx.com/api/products/${urlKey}?includes=market,360&currency=EUR&country=FR`;
    try {
        const fetch_res = await fetch(api_url);
        const json = await fetch_res.json();   
        res.json(json);
    } catch (error) {
        next(error)
    }
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))