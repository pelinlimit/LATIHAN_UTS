const mongoose = require("mongoose");

const ulasanchema = new mongoose.Schema({
    produk_id: {
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    rating: {
        type: Number,
    },
    komentar: {
        type: String,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

const ulasan = mongoose.model('Ulasan', ulasanSchema);
module.exports = Ulasan;