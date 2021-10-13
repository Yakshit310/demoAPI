const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');
// create a GET route
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/",(req,res)=>{
    res.render("res",{apiKey:req.body.apiKey})
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));