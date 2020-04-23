const mongoose = require('mongoose');

module.exports = {
    db_con: () => {
            mongoose.connect(
            `mongodb+srv://${process.env.atlas_user}:${process.env.atlas_password}@small-url-cluster-gj9jd.gcp.mongodb.net/test?retryWrites=true&w=majority`,
            {useNewUrlParser: true}
        ).catch(error => console.log(error))
    },
    mongoose
};