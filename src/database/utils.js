const fs = require('fs');
const path = require('path');

const databasePath = path.resolve(__dirname, 'db.json');

const saveToDatabase = (DB) => {
    fs.writeFileSync(databasePath, JSON.stringify(DB, null, 2), 'utf8');
};

module.exports = saveToDatabase;