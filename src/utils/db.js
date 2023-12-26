import mongoose from "mongoose";

const connect = async () => {
    mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'next' // Veritabanı adını belirtin
    });
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error('MongoDB bağlantı hatası:', error);
    });
    db.once('open', () => {
        console.log('MongoDB bağlantısı başarıyla açıldı.');
    });
};

export default connect;