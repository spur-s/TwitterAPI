
var db = require('../config/dbConfig.js');

var post = db.sequelize.define('post',
{
	//attributes
	id:{
		type: db.Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true,
		allowNull:false
    },
    
    name:{
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
post:{
type:db.Sequelize.STRING,
allowNull:false
},
date:{
	type:db.Sequelize.STRING,
	allowNull:false
}
},
{
	freezeTableName:true,
	tableName:"tbl_posts",
	paranoid:true
}
)
post.sync({force:false})
.then(() => {
    console.log('Post table has been created');
  })
  .catch(err => {
    console.error(err);
  });


module.exports={post};