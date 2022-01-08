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
    data_movie.clear();
    const movies = moviesModel.getMovies();
    //const actors = actorsModel.getActors();

    movies.forEach(element => {
        element.actors = actorsModel.getActorsById(element.id).actors;
        // actors.forEach(elementA =>{
        //     if (element.id == elementA.id){
        //         element.actors=elementA.actors;
        //     }
        // } )
    });

    data_movie.res = movies;
}

const getMovieById = (data_movie) => {
    // ...
    data_movie.clear();
    if (!data_movie.req.id)
        throw new Error('Ups! id no existe');

    const movie = moviesModel.getMovieById(data_movie.req.id);
    if (typeof movie == 'undefined')
        throw new Error('Ups! movie no existe');

    movie.actors = actorsModel.getActorsById(movie.id).actors;
    data_movie.res.push(movie);
}

const removeMovie = (data_movie) => {
    // ...
    data_movie.clear();
    if (!data_movie.req.id)
        throw new Error('Ups! id no existe');

    // transaccion
    if (moviesModel.removeMovie(data_movie.req.id) == -1) {
        throw new Error('Ups! Movie no existe');
    }
    if (actorsModel.removeActors(data_movie.req.id) == -1) {
        throw new Error('Ups! Actors no existe');
    }

    getAllMovies(data_movie);
}

const createMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para crear una Movies 
    // Puede usar ../models/actorPojo para crear un Actor
    // ...
    data_movie.clear();
    if (!data_movie.req)
        throw new Error('Ups! parametro de entarada incorrecto');

    const new_movie = moviePojo(data_movie.req);
    if (typeof new_movie == 'undefined')
        throw new Error('Ups! Error new_movie');

    const new_actor = actorPojo(data_movie.req);
    if (typeof new_actor == 'undefined')
        throw new Error('Ups! Error new_actor');

    moviesModel.createMovie(new_movie);
    actorsModel.createActors(new_actor);

    getAllMovies(data_movie);

}

const updateMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para actualizar una Movies 
    // Puede usar ../models/actorPojo para actualizar un Actor
    // ...
    data_movie.clear();
    if (!data_movie.req)
        throw new Error('Ups! parametro de entarada incorrecto');

    const new_movie = moviePojo(data_movie.req);
    if (typeof new_movie == 'undefined')
        throw new Error('Ups! Error new_movie');

    const new_actor = actorPojo(data_movie.req);
    if (typeof new_actor == 'undefined')
        throw new Error('Ups! Error new_actor');

    const movie = moviesModel.updateMovie(new_movie);
    if (typeof movie == 'undefined')
        throw new Error('Ups! Error al actualizar Movie');

    const actor = actorsModel.updateActors(new_actor);
    if (typeof actor == 'undefined')
        throw new Error('Ups! Error al actualizar Actor');

    getAllMovies(data_movie);

}

const getMovieBy = (data_movie) => {
    // ...
    data_movie.clear();
    if (!data_movie.req)
        throw new Error('Ups! parametro de entarada incorrecto');

    const movies = moviesModel.getMovieBy(data_movie.req);

    movies.forEach(element => {
        element.actors = actorsModel.getActorsById(element.id).actors;

    });
    data_movie.res = movies;

}

// Changed function name: updateActors to addActors
// const updateActors = (data_movie) => {
const addActors = (data_movie) => {
    // ...
    data_movie.clear();
    if (!data_movie.req.id)
        throw new Error('Ups! parametro de entarada incorrecto');

    const actors = actorsModel.getActorsById(data_movie.req.id);
    if (typeof actors == 'undefined')
        throw new Error('Ups! Error Actors no existen');
    
    // TODO: No tenemos API en actorsModel para añadir un actor     
    actors.actors.push(data_movie.req.value);  
    getAllMovies(data_movie);  

}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    addActors
}