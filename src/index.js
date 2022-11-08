require("dotenv").config();

const express = require("express");
const cors = require("cors");
const carsRoute = require("./routes/cars");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cars", carsRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
