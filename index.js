class Movie {
    constructor(title, genre, releaseYear, rentalPrice) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rentalPrice = rentalPrice;
        this.isAvailable = true;
    }

    displayInfo = () => `${this.title} (${this.releaseYear}) - ${this.genre} - $${this.rentalPrice} per day`;

    rentMovie = () => {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `${this.title} has been rented.`;
        } else {
            return `Sorry, ${this.title} is currently not available for rent.`;
        }
    }

    returnMovie = () => {
        if (!this.isAvailable) {
            this.isAvailable = true;
            return `Thank you for returning ${this.title}.`;
        } else {
            return `${this.title} is already available. Please check if you have returned it already.`;
        }
    }
}

class MovieStore {
    constructor(name) {
        this.name = name;
        this.movies = [];
    }

    addMovie = (movie) => {
        this.movies.push(movie);
    }

    displayMovies = () => (this.movies.length === 0)
        ? "No movies available."
        : this.movies.map(movie => movie.displayInfo()).join("\n");
}


// Example usage:

// Creating movies
const movie1 = new Movie("Inception", "Sci-Fi", 2010, 2.5);
const movie2 = new Movie("call of duty", "Action", 2005, 6.0);

// Creating a movie store
const movieStore = new MovieStore("Awesome Movie Store");

// Adding movies to the store
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

// Displaying available movies
// console.log(`Available movies at ${movieStore.name}:\n${movieStore.displayMovies()}`);

// Renting a movie
console.log(movie1.rentMovie());
console.log(movie2.returnMovie());

// Displaying available movies after renting
// console.log(`\nAvailable movies at ${movieStore.name}:\n${movieStore.displayMovies()}`);