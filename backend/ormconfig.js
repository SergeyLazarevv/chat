//let join = require('path');
module.exports = {
   "type": "mysql",
   "host": "192.168.112.3",
   "port": 3306,
   "username": "test",
   "password": "test",
   "database": "dev",
   "synchronize": true,
   "logging": false,
   "keepConnectionAlive": true,
   "entities": [
      "src/entity/**/*.ts"
      //join(__dirname, '**', '*.entity.{ts,js}')
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}