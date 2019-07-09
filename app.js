const methodOverride = require("method-override"),
      Session        = require("express-session"),
      flash          = require("connect-flash"),
      bodyParser     = require("body-parser"),
      express        = require("express"),
      app            = express();

const indexRoutes   = require("./routes/index"),
      contactRoutes = require("./routes/contact"),
      portfolioRoutes = require("./routes/portfolio"),
      aboutRoutes = require("./routes/about");

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

app.use(Session({
  secret: "This is a super secret string",
  resave: false,
  saveUninitialized: false
}));

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);
app.use("/portfolio", portfolioRoutes);



app.listen(port, function (){
  console.log("---Server Started---");
  console.log("---localhost:" + port + "---");
});