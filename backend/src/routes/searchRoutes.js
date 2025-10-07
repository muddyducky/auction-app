import express from "express";
import AuctionItem from '../models/auctionItemsSchema.js';
import { connectDB } from '../../index.js';

const router = express.Router();

//__ SEARCH ENDPOINT ___
router.get("/search", async (req, res) => {
    await connectDB(); 

    try {
        const { keyword, minPrice, maxPrice } = req.query; 

        let query = {}; 

        if (keyword) {
            query.$or = [
                { title: new RegExp(keyword, "i") }, 
                { description: new RegExp(keyword, "i") }
            ];
        }

        if (minPrice || maxPrice) {
            query.startPrice = {};
            if (minPrice) query.startPrice.$gte = parseFloat(minPrice);
            if (maxPrice) query.startPrice.$lte = parseFloat(maxPrice);
        }

        const results = await AuctionItem.find(query);

        if (results.length === 0) {
            return res.status(200).json([]);
        }

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching auction items", error });
    }
});

router.get("/items", async (req, res) => {
  await connectDB();
  try {
    const items = await AuctionItem.find({});
     console.log("Fetched items:", items);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching all auction items", error: err });
  }
});


export default router;
