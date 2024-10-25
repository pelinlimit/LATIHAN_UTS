const Produk = require("../models/produk");

const produkIndex = async(req,res) => {
    try{
        const produk = await Produk.find({});
        res.status(200).json(mahasiswa);
        if(!mahasiswas){
            res.status(404).json({message:"Collection Is Empty"});
        }
    }catch(error){
        res.status(500).json({message:"Error retrieving users",error});

    }
}

const produkInsert = async(req,res) => {
    try{
        const produk = await Produk.find({});
        res.status(200).json(mahasiswa);
        if(!mahasiswas){
            res.status(404).json({message:"success"}).json(produk);
        }
    }catch(error){
        res.status(400).json({message:"Failed"});

    }
}