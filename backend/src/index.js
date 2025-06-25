import express, { urlencoded } from "express";
import userRoutes from "./routes/user.route.js";
import profileRoutes from "./routes/profile.routes.js";
import paymentRoutes from "./routes/payments.route.js";
import courseRoutes from "./routes/course.route.js";
import contactUsRoute from "./routes/contact.route.js"
import connectDB from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { cloudinaryConnect } from "./utils/cloudinaryConnect.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT ?? 4000;

//database connect
connectDB();
//middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
  }),
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp",
  }),
);

//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
