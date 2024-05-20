const log = console.log;
const multer = require("multer");
var path = require("path");

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log("File Destination:", "./public/");
    callback(null, "./public/");
  },
  filename: function (req, file, callback) {
    console.log("Uploaded File:", req.body);
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).array("file", 1);

module.exports.upload_file = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ code: 500, msg: "Error uploading file" });
    }

    console.log("Upload Successful:", req.files);
    res.status(200).json({ code: 200, msg: "Ok" });
  });
};

const storage2 = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./private/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload2 = multer({
  storage: storage2,
  fileFilter: fileFilter,
}).array("file", 1);

module.exports.upload_file_private = async (req, res) => {
  upload2(req, res, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ code: 500, msg: "Error uploading file" });
    }

    console.log("Upload Successful:", req.files);
    res.status(200).json({ code: 200, msg: "Ok" });
  });
};

module.exports.get_private_file = async (req, res) => {
  var fileName = req.params.file;
  log(path.join(__dirname, "./private", fileName));
  res.sendFile(path.join(__dirname, "./private", fileName));
};
