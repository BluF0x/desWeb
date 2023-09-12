const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get('/cool', (req, res)=>{
  res.send("Coooool")
})

router.get('/cool/beach', (req, res)=>{
  res.send("De boa na praia")
})
router.get('/ifc', (req, res)=>{
  res.send("IFC Sombrio > IFC Santa Rosa")
})

module.exports = router;
