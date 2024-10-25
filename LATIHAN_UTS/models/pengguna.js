const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    email: {
    type: String,
    required: true,
    unique: true,
     },
    password: {
    type: String,
    },
    alamat: {
    type: String,
    },
    tanggal_daftar: {
    type: DataTransfer,
   }
});

const Pengguna = mongoose.model('Pengguna', penggunaSchema);
module.exports = Pengguna;