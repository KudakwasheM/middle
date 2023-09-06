import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import colors from "colors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import fundRoutes from "./routes/fundRoutes.js";
import investmentRoutes from "./routes/investmentRoutes.js";
import projectDetailRoutes from "./routes/projectDetailRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import investorDetailsRoutes from "./routes/investorDetailsRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/funds", fundRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/details", projectDetailRoutes);
app.use("/api/members", teamMemberRoutes);
app.use("/api/testimonials", testimonialRoutes);
// app.use("/api/users/investors/details", investorDetailsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on localhost:${port}`.white)
);
