import { ManagerFs } from '../managers/manager-fs.js';

//'./data/actors.json'


class ActorsModel {

	constructor() {
		this.mgfl = new ManagerFs('./data/actors.json');
		this.actors = this.mgfl.getData();

	}
	getActors() {
		return this.actors;
	}
	getActorsById(id) {
		return this.actors.find(element => element.id == id);
	}

	getActorsBy(elem) {
		//console.log(elem.key)
		return this.actors.filter(element => element[elem.key] == elem.value);
	}

	removeActors(id) {
		const index = this.actors.findIndex(element => element.id == id);
		if (index != -1) this.actors.splice(index, 1);
		return index;
	}

	createActors(req) {
		this.actors.push(req);
		return req;
	}

	updateActors(req) {
		const actor = this.getActorsById(req.id);
		if (typeof actor != 'undefined') {
			this.removeActors(req.id);
			this.createActors(req);
		}
		return actor;
	}

	addActors(req) {
		const actors = this.getActorsById(req.id);
		if (typeof actors == 'undefined')
			throw new Error('Ups! Error Actors no existen');

		actors.actors.push(req.value);
		return actors


	}
	listMovies(req) {
		const elem={key:'actors' , value:req.value}
		let i=[];
		if (typeof req.value == 'undefined')
			throw new Error('Ups! Error Actors no existen');
		this.actors.forEach(element => {
			if(element.actors.findIndex(actor=>actor==req.value)!=-1)
				i[i.length]=element
			})
			return i
	}

}



export default new ActorsModel()