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
    // ...
}

const getMovieById = (data_movie) => {
    // ...

}

const removeMovie = (data_movie) => {
    // ...
}

const createMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para crear una Movies 
    // Puede usar ../models/actorPojo para crear un Actor
    // ...

}

const updateMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para actualizar una Movies 
    // Puede usar ../models/actorPojo para actualizar un Actor
    // ...

}

const getMovieBy = (data_movie) => {
    // ...
}

const updateActors = (data_movie) => {
    // ...
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