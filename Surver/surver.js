
const handelbar =require("handlebars")
const express =require('express');
const hbs =require('hbs');
const path =require('path');

const app =express();

// ports
const port =3000;

// PATHS

const ViewsPath = path.join(__dirname,"../Templates/views");
const PartialsPath = path.join(__dirname,"../Templates/Partials");
const publicPath =path.join(__dirname,"../public")


app.set("views",ViewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(PartialsPath);
app.use(express.static(publicPath)); //middleware set 


let name ="profile";
hbs.registerHelper('whichPartial', function(context, options) { return name });


app.get("/",(req,res)=>{
    res.render('mainPage');

});
app.get("/about",(req,res)=>{
    res.render('AboutPage',{

        //    handelbar.registerHelper('whichPartial', function() { return 'profile' }) 
       
        
    });
});



app.listen(port,()=>{
     console.log(`listion on ${port}`);
});  