const Sequelize = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('twitter', 'sparsh', 'arjyal', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully with mysql having database twitter.');
  })
  .catch(err => {
    console.error(err);
  });

  module.exports={
  	sequelize,Sequelize
  }