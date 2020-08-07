const mongoose = require('mongoose');
const db_url = "mongodb+srv://admin:talented13378@cluster0-y2obl.mongodb.net/test?retryWrites=true";
/**
 * Initializes the database connection
 */
module.exports = () => mongoose.connect(db_url, { useNewUrlParser: true })
  .then(() => console.log('[DATABASE]: Connected!'));