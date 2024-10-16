const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Florian-Curier:tqsf1Qdq2H2Cs4cD@cluster0.rkw3lxd.mongodb.net/blackboard';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
