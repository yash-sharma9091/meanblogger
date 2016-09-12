(function(){
	"use strict";

	var mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema,
		URLSlugs 	= require('mongoose-url-slugs');

	var	PostSchema = new Schema({
		body  : String,
		image : String,
		originalname: String,
		imageurl: String,
		title : { 
			type: String,
			trim: true,
			required: true
		},
		status : { 
			type: Boolean, 
			default: true
		},
		created : { 
			type: Date, 
			default: Date.now 
		}
	});

	PostSchema.plugin(URLSlugs('title', {field: 'slug'}));
	module.exports = mongoose.model('Post', PostSchema);
}());