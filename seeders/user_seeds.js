const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.JAWSDB_URL);


sequelize.query('INSERT INTO User (users email, password) VALUES ("Samjones@email.com", "fruit123")');
sequelize.query('INSERT INTO User (users email, password) VALUES ("Marysmith@earth.com", "7789123")');
sequelize.query('INSERT INTO User (users email, password) VALUES ("Bobbymorgan@life.com", "today123")');

