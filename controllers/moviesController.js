import moviesModel from '../models/moviesModel.js';
import actorsModel from '../models/actorsModel.js';
import moviePojo from '../models/moviePojo.js';
import actorPojo from '../models/actorPojo.js';


/*
  Utilitzar throw new Error("missatge") per gestionar posibles errors o missatges

   if ()
   throw new Error('parameter id not exist');

   exemple:
    if (pelicula no existeix)
        throw new Error('¡Ups! id of movie not found');
*/

const getAllMovies = (data_movie) => {
    data_movie.res=moviesModel.getMovies();
}

const getMovieById = (data_movie) => {
    if (!moviesModel.getMovieById(data_movie.req.id))
    throw new Error('ID '+data_movie.req.id+' no existeix');
    data_movie.res=[]
    data_movie.res[0]=moviesModel.getMovieById(data_movie.req.id);
    let actor=actorsModel.getActorsById(data_movie.req.id);
    data_movie.res[0].actors=actor.actors
    
    
}

const removeMovie = (data_movie) => {
    if (!moviesModel.getMovieById(data_movie.req.id))
    throw new Error('ID '+data_movie.req.id+' no existeix');
    let i = moviesModel.removeMovie(data_movie.req.id)
    data_movie.res=moviesModel.getMovies()

    data_movie.res.forEach(element => {
        let actor=actorsModel.getActorsById(element.id);
        element.actors=actor.actors

    });
}

const createMovie = (data_movie) => {
    
    moviesModel.createMovie(data_movie.req)

}

const updateMovie = (data_movie) => {
    
    if (!moviesModel.getMovieById(data_movie.req.id))
    throw new Error('ID '+data_movie.req.id+' no existeix');
    
    moviesModel.updateMovie(data_movie.req)
}

const getMovieBy = (data_movie) => {
    data_movie.res=moviesModel.getMovieBy(data_movie.req)
}

const updateActors = (data_movie) => {
    if (!moviesModel.getMovieById(data_movie.req.id))
    throw new Error('ID '+data_movie.req.id+' no existeix');
   data_movie.res.push(moviesModel.getMovieById(data_movie.req.id))
   data_movie.res[data_movie.res.length-1].actors.push(data_movie.req.value)

}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    updateActors
}