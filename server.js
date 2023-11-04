const express = require("express");
const cors = require("cors"); // Import the cors package
const axios = require("axios");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
const apiUrl = process.env.API_URL;

app.use(cors());
app.get("/api/photo-gallery-feeds/:id", async (req, res) => {
  try {
    const pageNo = req.params.id;
    if (pageNo) {
      const response = await axios.get(
        `${apiUrl}/photo-gallery-feed-page/page/${pageNo}`
      );
      const data = response.data;
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from the third-party API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
