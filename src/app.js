const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");
const port = process.env.PORT || 3000 ;
const app = express();


//public static path
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));// to serve static files such as images, CSS, JS using the built-in express.static middleware function.


const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")
app.set("view engine", "hbs");//to use hbs templates engine and by making default folder called views.
app.set("views", template_path);
hbs.registerPartials(partials_path);


//routing
app.get("/", (req, res)=>{
    res.render("index")// express work from top to button so this line of code not
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{ // If not match any things then show 400 error page
    res.render("404error", {
        errorMsg: "Oops! Page not found, clich here to go back",
    });
});
//listen to port
app.listen(port, ()=>{
    console.log(`Listening to port at ${port}`)
})