import express from "express";
import passport from "./passport-setup.js";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieSession from "cookie-session";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import config from "./config.js";
import cors from "cors";
import morgan from 'morgan';
import connectDB from './config/db.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
);

app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb) => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/session", (req, res) => {
  console.log("Current user is:", req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
