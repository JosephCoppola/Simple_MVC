var mongoose = require('mongoose');

var CatModel; 

var CatSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	
	bedsOwned: {
		type: Number,
		min: 0,
		require: true
	},
	
	createdDate:{
		type: Date,
		default: Date.now
	}
});

CatSchema.methods.sayName = function(){
	console.log(this.name);
};

CatSchema.statics.findByName = function(name,callback){
		
};

CatModel = mongoose.model('Cat',CatSchema);

module.exports.CatModel = CatModel;
module.exports.CatSchema = CatSchema;