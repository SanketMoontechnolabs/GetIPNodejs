const express = require("express");
const router = express.Router();

router.get("/ipaddress", (req, res) => {
  const { networkInterfaces } = require("os");
  const nets = networkInterfaces();
  let localIP = "";

  // Loop through network interfaces to find local IP
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        localIP = net.address;
      }
    }
  }
  console.log(localIP);

  res.status(200).json({ message: "User Get IP successfully", localIP });
});

module.exports = router;