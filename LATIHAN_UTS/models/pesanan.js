const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    jumlah : {
        type : Number,
    },
    status : {
        type : String,
    },
    tanggal_pesanan : {
        type : Date,
    }
});

const Pesanan = mongoose.model('Pesanan', pesananSchema);
module.exports = Pesanan;