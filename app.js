if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");




const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const Listing = require('./models/listing.js');
const { type } = require('os');
const wrapAsync = require('./utils/wrapAsync.js');

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    
};

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret: "mySuperSecredCode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    },
};

// app.get("/", (req, res) => {
//     res.send("hi i an root");
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser" , async(req, res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student",
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.get("/trending/show", wrapAsync(async(req, res) => {
    let listings = await Listing.find();
    let trendingListings = listings.filter(listing => listing.reviews && listing.reviews.length > 1);
    
    
    res.render("type/mountain", {listings: trendingListings});
}));

app.get("/rooms/showm", wrapAsync(async(req, res) => {
    res.redirect("/listings");
}));

app.get("/iconiccities/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Iconic Cities"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));
app.get("/mountain/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Mountains"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/castles/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Castles"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/amazingpools/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Amazing Pools"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));
app.get("/camping/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Camping"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/farms/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Farms"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/boats/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Boats"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/arctic/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Arctic"});
    console.log(listings);
    
    res.render("type/mountain", { listings });
}));

app.get("/domes/showm", wrapAsync(async(req, res) => {
    let listings = await Listing.find({type: "Domes"});
    
    res.render("type/mountain", { listings });
}));

app.get("/destination/:query", wrapAsync(async(req, res) => {
    let dest = req.params.query;
    let listings = await Listing.find({ location: dest });
    if(!listings || listings.length === 0){
        req.flash("success", "The location not been added yet");
        return res.redirect("/listings");    
    }
    res.render("type/mountain", { listings });
}));

app.get("/profile", (req, res) => {
    let curruser = req.user;
    res.render("type/userprofile.ejs",{ curruser });
});

app.get("/your/listings", async(req, res) => {
    let userid  = req.user._id;
    let user = req.user;
    let listings = await Listing.find({ owner: userid});
    
    res.render("type/useradds.ejs", { listings, user });
});


app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// app.all("*", (req, res, next) =>  {
//         next(new ExpressError(404, "Page Not Found!"));
//     });

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("app is listenig to port 8080");
});   


















