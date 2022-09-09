const mongoose = require('mongoose');

// 2nd paramerter(object) in connect is only for verson 5. It is not required in version 6.

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
