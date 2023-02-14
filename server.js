const mongoose = require('mongoose');
const uri =
  'mongodb+srv://stevenchan:<password>@task-manager.xrcmdpl.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to database...');
  })
  .catch((err) => {
    console.log(err);
  });
