import mongoose from "mongoose";
import AuctionItem from "../models/auctionItemsSchema.js";
import { connectDB } from "../../index.js";
import auctionData from "./auctionData.js";

const seedDatabase = async () => {
  await connectDB();

  try {
    await AuctionItem.insertMany(auctionData);
    console.log("Successfully seeded data to database");
  } catch (error) {
    console.log("There was an error seeding data:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

export { seedDatabase };
