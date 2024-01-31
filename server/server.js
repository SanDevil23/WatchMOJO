const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

const options = {
  method: "GET",
  url: "https://imdb146.p.rapidapi.com/v1/find/",
  params: { query: "jack reacher" },
  headers: {
    "X-RapidAPI-Key": "b27c1c2272mshf2fa2c02d31bcbbp13a792jsn3937dac9da1a",
    "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
  },
};

app.get("/", async (req, res) => {
  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});



app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
