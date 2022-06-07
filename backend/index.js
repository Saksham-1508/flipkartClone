import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
// app 
const PORT = 3001;
const app = express();
app.use(cors());

// database connection
const DB = `mongodb+srv://saksham15:orangejus@cluster0.sxt9qig.mongodb.net/flipkartApp?retryWrites=true&w=majority`;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database Connected Succesfully');
}).catch((error) => console.log(error));

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    stars: Number
});

const products = mongoose.model('products', productSchema);


app.get('/getproducts', async(req,res)=>{
    const data = await products.find({});
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

