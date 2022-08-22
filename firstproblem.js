import fetch from "node-fetch"
const API_URL = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"


const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    let actors = []
    let genres = []
    //Extracting all actors and all genres from the available data
    data.forEach((movie)=>{
        if(movie.cast!==[]){
            movie.cast.forEach((actor)=>actors.push(actor))
        }

        if(movie.genres!==[]){
            movie.genres.forEach((genre)=>genres.push(genre))
        }
    })
    return [actors, genres]

}


const actorsAndMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    let actors = []
    //Finding all the movies in which an actor X is present
    actorList.forEach((actor)=>{
        let myObj={
            name:actor,
            movies:[]
        }
        data.forEach((movie)=>{
            if(movie.cast.includes(actor)){
                myObj.movies.push(movie.title)
            }
        })
        if(myObj.movies.length>0){
            actors.push(myObj)
        }
    })
    return actors
}

const genresAndMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    let genres = []
    //Finding all the movies in which a genre Y is present
    genreList.forEach((genre)=>{
        let myObj={
            type:genre,
            movies:[]
        }
        data.forEach((movie)=>{
            if(movie.genres.includes(genre)){
                myObj.movies.push(movie.title)
            }
        })
        if(myObj.movies.length>0){
            genres.push(myObj)
        }
    })
    return genres
}


let [actorList, genreList] = await fetchData(API_URL)
actorList = [... new Set(actorList)] //Creating a list of all unique actors
genreList = [... new Set(genreList)] //Creating a list of all unique genres
const actors = await actorsAndMovies(API_URL)
const genres = await genresAndMovies(API_URL)

let outputObj = {
    actors:actors,
    genres:genres
}

// console.log(outputObj.actors[0].movies);
console.log(outputObj);