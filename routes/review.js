const express=require("express");
const router=express.Router({mergeParams:true});

const wrapAsync=require("../utils/wrapAsync.js");
const Expresserr=require("../utils/Expresserr.js");

const Review=require("../models/review.js");
const Listing=require("../models/listing.js");

const {validateReview, isLoggedIn,isreviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js");

//Create review
router.post("/",
    isLoggedIn,
    validateReview,wrapAsync(reviewController.CreateReview)
);

//Delete Review

router.delete("/:reviewId",
    isLoggedIn,
    isreviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports=router;