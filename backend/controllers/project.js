'use strict'

const Project = require('../models/project')
var fs = require('fs');


var controller = {
	home: function(req,res){
		return res.status(200).send({
			message: 'soy la home'
		})

	},

	test: function(req,res){
		return res.status(200).send({
			message: "soy el metodo test"
		})
	},

	saveProject: function(req,res){
			var project = new Project();

			var params = req.body;
			project.name = params.name;
			project.description = params.description;
			project.category = params.category;
			project.year = params.year;
			project.langs = params.langs;
			project.image = null;

			project.save((err,projectStored) => {
				if(err) return res.status(500).send({message: 'error al guardar'});

				if(!projectStored) return res.status(404).send({message: 'no se ha podido guardar el proyecto'});
			
				return res.status(200).send({project: projectStored});
			})
	},

	getProject: function(req,res){
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message: 'el proyecto no existe'});
		

		Project.findById(projectId, (err,project) =>{

			  if(err) return  res.status(500).send({message: 'error al devolver los datos'});

			  if(!project) return res.status(404).send({message: 'el proyecto no existe'});

			  return res.status(200).send({
			  	project
			  });
		} )
	},

	getProjects: function(req,res){
		Project.find({}).sort('-year').exec((err, projects)=>{

			if(err) return  res.status(500).send({message: 'error al devolver los datos'});

			if(!projects) return res.status(404).send({message: 'el proyecto no existe'});

			return res.status(200).send({projects});
		});
	},

	updateProject: function(req,res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update,{new:true}, (err,projectUpdated)=>{
			if(err) return  res.status(500).send({message: 'error al actualizar'});

			if(!projectUpdated) return res.status(404).send({message: 'no se ha podido actualizar'});

			return res.status(200).send({
				project: projectUpdated
			});
		})
	},

	deleteProject: function(req,res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId,(err,projectDeleted)=>{
			if(err) return  res.status(500).send({message: 'error al eliminar'});

			if(!projectDeleted) return res.status(404).send({message: 'no se encuentra proyecto'});

			return res.status(200).send({
				 project: projectDeleted
			});
		});
	},

	uploadImage: function(req,res){
		var projectId = req.params.id;
		var fileName = "imagen no subida...";

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.')
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'jpg' || fileExt == 'gif'){
				Project.findByIdAndUpdate(projectId,{image: fileName}, {new:true},(err,projectUpdated) =>{
					if(err) return  res.status(500).send({message: 'La imagen no se ha subido'});

					if(!projectUpdated) return  res.status(404).send({message: 'La imagen no se ha subido'});

					return res.status(200).send({
				 		 project: projectUpdated
					});

				})
			}else{

				fs.unlink(filePath, (err)=>{
					return res.status(500).send({message: "la extencion no es valida"})
				})

			}
			
		}else{
			return res.status(200).send({
				message: fileName
			})
		}

	}


};

module.exports = controller;