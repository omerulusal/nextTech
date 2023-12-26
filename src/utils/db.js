import mongoose from "mongoose";

const connect = async () => {
    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'next' // Veritabanı adını belirtin
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası:'));
    db.once('open', () => {
        console.log('MongoDB bağlantısı başarıyla açıldı.');
    });
};

export default connect;