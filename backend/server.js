import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import mongoose from "mongoose";



dotenv.config({ path: '../.env' });//this allows us to use those env variable

//DB connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.log(err);
})

//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewaree
app.use(cors());
app.use(express.json());


// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //access of uploaded images from uploads folder
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
