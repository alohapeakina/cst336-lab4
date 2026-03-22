import express from 'express';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
//    res.send('Hello Express app!')
    res.render('index');
});

app.listen(3000, () => {
   console.log('server started');
});
