const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const dbConnect = require("./config/db.config");

const userRouter = require("./routes/users.route");
const homeRouter = require("./routes/home.route");
const menuRouter = require("./routes/menu.route");

const app = express();

dbConnect();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/", homeRouter);
app.use("/menu", menuRouter);

module.exports = app;
