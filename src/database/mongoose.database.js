const mongoose = require("mongoose");

const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagerclustes.xnlvm0m.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log(
                    `Could not connect to MongoDB: ${error.message}`
                );
            }
            return console.log("Connected to MongoDB!");
        }
    );
};

module.exports = connectToDatabase;
