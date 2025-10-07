import mongoose from 'mongoose';

const auctionItemsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String, required: true},
    startPrice: {type: Number, required: true},
    reservePrice: {type: Number},
    image: {type: String},
    createdAt: {type: Date, default: Date.now}
    
});

const AuctionItem = mongoose.model('AuctionItem', auctionItemsSchema);

export default AuctionItem;