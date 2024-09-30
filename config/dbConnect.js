const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log('Data base connected Successfully')
    } catch (error) {
        console.log('Data base Error')
    }
};

module.exports = dbConnect