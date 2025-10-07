import express from "express";
import AuctionItem from "../models/auctionItemsSchema.js";
import { connectDB } from "../../index.js";

const router = express.Router();

router.post("/add-listing", async (req, res) => {
  await connectDB();

  try {
    const { title, description, startPrice, reservePrice } = req.body;

    if (!title || !description || !startPrice || !reservePrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newListing = new AuctionItem({
      title,
      description,
      startPrice,
      reservePrice,
      image: "" 
    });

    const savedListing = await newListing.save();
    res.status(201).json(savedListing);

  } catch (error) {
    res.status(500).json({ message: "Error adding listing", error });
  }
});

export default router;
