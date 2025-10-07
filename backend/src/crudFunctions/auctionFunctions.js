import AuctionItem from "../models/auctionItemsSchema.js";
import { connectDB } from "../../index.js";

//___ ADD ITEM ___
const addItem = async (newItem) => {
  
  try {
    await connectDB();
    const createdItem = await AuctionItem.create(newItem);
    console.info("New Item Added:");
    console.info(createdItem);
  } catch (error) {
    console.error("Error adding new item:", error);
  }
};

//___ FIND ITEM ___
//__ Find by: Title, price
const findItem = async (title) => {
  try {
    if (!title) {
      console.log("Please provide a title to search for.");
      return;
    }

    const search = new RegExp(title, "i");

    const matchingItems = await AuctionItem.find({ title: search });
    
    if (matchingItems.length === 0) {
      console.log(`No items found matching the title: "${title}".`);
    } else {
      console.log(`${matchingItems.length} items found for title: "${title}"`);
      console.info(matchingItems);
    }
  } catch (error) {
    console.error("Error finding items:", error);
  }
};

//___ UPDATE ITEM ___
const updateItem = async (title, itemData) => {
  try {
    const updated = await AuctionItem.updateOne({ title }, { $set: itemData });
    if (updated.matchedCount === 0) {
      console.info(`No item found with title: ${title} to update.`);
    } else {
      console.info(`${title} updated successfully`);
      console.info(updated);
    }
  } catch (error) {
    console.error(`Error updating item "${title}":`, error);
  }
};

//___ REMOVE ITEM ___
const removeItem = async (title) => {
  try {
    const result = await AuctionItem.deleteOne({ title: title });
    if (result.deletedCount === 0) {
      console.info(`No item found with title: ${title}`);
    } else {
      console.info(`${title} was removed successfully`);
      console.info(`Removed count: ${result.deletedCount}`);
    }
  } catch (error) {
    console.error(`Error removing item "${title}":`, error);
  }
};

//___ LIST ALL ITEMS ___
const listItems = async () => {
  const listAllItems = await AuctionItem.find({});
  console.info(listAllItems);
  console.info(`${listAllItems.length} Items found`);
};

//__ EXPORT FUNCTIONS __
export { addItem, findItem, updateItem, removeItem, listItems };
