'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = Schema ({
	name: String,
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
})

module.exports = mongoose.model('Project',ProjectSchema)

//projects --> guarda los docuemnts en la coleccion