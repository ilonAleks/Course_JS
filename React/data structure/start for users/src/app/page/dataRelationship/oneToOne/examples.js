export const oneToOneExample1Part1 = `{
    _id: "joe",
    name: "Joe Bookreader",
    address: {
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345"
    }
}
`;
export const oneToOneExample1Part2 = `// User 
{
    _id: "joe",
    name: "Joe Bookreader"
}
// User Address
{
    user_id: "joe", // reference to patron document
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
}`;

export const oneToOneExample2Part1 = `{
    _id: 1,
    title: "The Arrival of a Train",
    year: 1896,
    runtime: 1,
    released: ISODate("01-25-1896"),
    poster: "http://ia.media-imdb.com/images/M/MV5BMjEyNDk5MDYzOV5BMl5BanBnXkFtZTgwNjIxMTEwMzE@._V1_SX300.jpg",
    plot: "A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, ...",
    fullplot: "A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, the line dissolves. The doors of the railway-cars open, and people on the platform help passengers to get off.",
    lastupdated: ISODate("2015-08-15T10:06:53"),
    type: "movie",
    directors: [ "Auguste Lumière", "Louis Lumière" ],
    imdb: {
        rating: 7.3,
        votes: 5043,
        id: 12
    },
    countries: [ "France" ],
    genres: [ "Documentary", "Short" ],
    tomatoes: {
        viewer: {
            rating: 3.7,
            numReviews: 59
        },
        lastUpdated: ISODate("2020-01-09T00:02:53")
    }
}`;

export const oneToOneExample2Part2 = `// movie collection
[
    {
        _id: 1,
        title: "The Arrival of a Train",
        year: 1896,
        runtime: 1,
        released: ISODate("1896-01-25"),
        type: "movie",
        directors: [ "Auguste Lumière", "Louis Lumière" ],
        countries: [ "France" ],
        genres: [ "Documentary", "Short" ],
    }
]

// movie_details collection
[
    {
        _id: 156,
        movie_id: 1, // reference to the movie collection
        poster: "http://ia.media-imdb.com/images/M/MV5BMjEyNDk5MDYzOV5BMl5BanBnXkFtZTgwNjIxMTEwMzE@._V1_SX300.jpg",
        plot: "A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, ...",
        fullplot: "A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, the line dissolves. The doors of the railway-cars open, and people on the platform help passengers to get off.",
        lastupdated: ISODate("2015-08-15T10:06:53"),
        imdb: {
            rating: 7.3,
            votes: 5043,
            id: 12
        },
        tomatoes: {
            viewer: {
                rating: 3.7,
                numReviews: 59
            },
            lastUpdated: ISODate("2020-01-29T00:02:53")
        }
    }
]`;
