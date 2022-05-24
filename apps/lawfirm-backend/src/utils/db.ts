const mongoose = require('mongoose');
import { config } from '../config';
function db_connection() {
  try {
    mongoose.connect(config.get('database.host'), { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('database connected');
    });
  } catch (err) {
    console.log(err);
  }
}
export { db_connection };
