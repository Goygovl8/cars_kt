const express = require("express");
const mongoose = require("mongoose");
const Car = require("./models/Car");

const PORT = 5000;

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/cars")
  .then(() => {
    console.log("Успешное подключение к БД");
  })
  .catch((error) => {
    console.log("Ошибка при подключении к БД: " + error);
  });




app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
    console.log(cars);
  } catch (error) {
    console.log("Ошибка при поключении машин: " + error);
  }
});




app.get("/cars/:id", async (req, res) => {
  try {
    const {id} = req.params
    const cars = await Car.findById(id);
    console.log(cars);

    if (!updateCar) {
      return res.status(404).send("Такой машины не существует");
    }
  } catch (error) {
    console.log("Ошибка при поключении 1 машины: " + error);
  }
});






app.post("/addcar", async (req, res) => {
  const { marka, model, price, color } = req.body;
  const newCar = await Car.create({
    marka,
    model,
    price,
    color
  });

  await newCar.save();
  res.send("Машина успешно добавлена!");
});

app.listen(PORT, () => {
  console.log("Сервер успешно запущен на http://localhost:" + PORT);
});





app.patch("/car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { marka, model, price, color } = req.body;
    const updateCar = await Car.findByIdAndUpdate(id, {
      marka,
      model,
      price,
      color
    });

    if(!updateCar){
      res.send("Такой машины не существует!")
    }

    res.send("Машина успешно изменена!");
  } catch (error) {
    console.log("Ошибка, не удалось выполнить команду: " + error);

  }
});





app.delete("/deletecar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const car = await Car.findByIdAndDelete(id);
    res.send("Машина успешно удалена!");
  } catch (error) {
    console.log("Ошибка при добавление машины: " + error);
  }
});

