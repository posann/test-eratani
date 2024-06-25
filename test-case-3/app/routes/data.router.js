const dataController = require("../controllers/data.controller");
const router = require("express").Router();

router.get("/get-data", dataController.getData);
router.get("/get-country", dataController.getDataCountry);
router.get("/get-credit-card", dataController.getDataCreditCard);
router.post("/add-data", dataController.addData);

module.exports = router;
