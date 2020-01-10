
var db = require('../config/dbConfig.js');
var user = db.sequelize.define('user',
{
	//attributes
	id:{
		type: db.Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true,
		allowNull:false
    },
    
    firstname:{
        type: db.Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type: db.Sequelize.STRING,
	allowNull:false
    },
    email:{
        type: db.Sequelize.STRING,
	allowNull:false
    },
username:{
	type: db.Sequelize.STRING,
	allowNull:false
},
image:{
	type: db.Sequelize.STRING,
	allowNull:true
},
password:{
	type:db.Sequelize.STRING,
	allowNull:false
}
},
{
	freezeTableName:true,
	tableName:"tbl_user",
	paranoid:true

}
)
user.sync({force:false})
.then(() => {
    console.log('User table has been created');
  })
  .catch(err => {
    console.error(err);
  });


module.exports={user};