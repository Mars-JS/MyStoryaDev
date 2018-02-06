const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/api/books/create")
    .post(controller.create);

router.route("/api/books/all")
    .get(controller.findAll);

router.route("/api/books/genre")
    .get(controller.findByGenre);

router.route("/api/books/popular")
    .get(controller.findByViews)

router.route("/api/books/user/:userid")
    .get(controller.findByUser);

router.route("/api/books/bookid/:bookid")
    .get(controller.findById);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});