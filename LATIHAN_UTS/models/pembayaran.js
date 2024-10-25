const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    transaksi_is : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Transaksi",
        require : true,
    },
    metode_pembayaran : {
        type : String,
    },
    jumlah : {
        type : Number,
    },
    tanggal_pembayaran : {
        type : Date,
    },
    status : {
        type : String,
    }
});

const Pembayaran = mongoose.model('Pembayaran', pembayaranSchema);
module.exports = Pembayaran;