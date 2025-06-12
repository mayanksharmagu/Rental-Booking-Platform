const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema ({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
        // type: String,
        // default: "https://thumbs.dreamstime.com/b/coconut-palm-tree-tropical-vector-illustration-344480272.jpg",
        // set: (v) => 
        //     v === ""
        //     ? "https://thumbs.dreamstime.com/b/coconut-palm-tree-tropical-vector-illustration-344480272.jpg" 
        //     : v,
    },
    price: Number,
    location: String,
    country: String,
    type: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
    
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

