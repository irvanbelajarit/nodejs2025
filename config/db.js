const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {

}).then(() => {
  console.log("Berhasil konek ke database");
}).catch((e) => {
  console.log(e);
  console.log("Gagal konek ke database");
});

