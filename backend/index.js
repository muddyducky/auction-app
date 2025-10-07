import mongoose from 'mongoose';
import express from 'express';
import searchRoutes from './src/routes/searchRoutes.js';
import listingRoutes from './src/routes/listingRoutes.js'
import cors from 'cors'
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();

mongoose.Promise = global.Promise;

//___ CONFIGURATION FOR MONGODB ___
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");

        process.on('exit', async () => {
            if (mongoose.connection.readyState === 1) {
                await closeDB();
                console.log("MongoDB Connection Closed");
            }
        });

    } catch (err) {
        console.error("Connection Error:", err.message);
        process.exit(1);
    }
};

const closeDB = async () => {
  await mongoose.connection.close();
};


//___ EXPRESS CONFIG ___
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan('dev'))
// app.use(cors('http://localhost:5173'))

app.use('/api', searchRoutes)
app.use('/api', listingRoutes)
app.listen(PORT, () => console.log(`Server is connected at http://localhost:${PORT}`))



export {connectDB, closeDB};




