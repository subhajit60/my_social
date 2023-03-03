
const handelbar =require("handlebars")
const express =require('express');
const hbs =require('hbs');
const path =require('path');

const app =express();

// ports
const port = 3000;

// PATHS

const ViewsPath = path.join(__dirname,"../Templates/views");
const PartialsPath = path.join(__dirname,"../Templates/Partials");
const publicPath =path.join(__dirname,"../public")


app.set("views",ViewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(PartialsPath);
app.use(express.static(publicPath)); //middleware set 

const pages = ["home","profile","notification","bookmark","list","more"];
let jsLinks="js/refress.js";
let jsLinks2="js/basePage.js";
// let jsLinks=path.join("js/abc.js");




let name =pages[1];

hbs.registerHelper('whichPartial', function(context, options) { return name }); //this line is very importent fot change contet in page 
//this line for change content in display page like profile page to home page 


app.get("/",(req,res)=>{
    res.render('mainPage',{
        jsLink:jsLinks,
        jsLink2:jsLinks2
       
    });
  

});
app.get("/about",(req,res)=>{
    res.render('AboutPage',{

        //    handelbar.registerHelper('whichPartial', function() { return 'profile' })  ronge
       
        
    });
});






app.listen(port,()=>{
     console.log(`listion on ${port}`);
});  