//movies database 

db.movies.insert({
    title: "Star Wars",
    writer: "George Lucas",
    year: 1977,
    actor: [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Peter Cushing",
      "James Earl Jones",
    ],
  });

db.movies.insert({
    title : "Raiders of the Lost Ark",
    writer : "George Lucas",
    year : 1981,
    actors : [
    "Harrison Ford"
]
  });

db.movies.insert({
    title : "Fight Club",
    writer : "Chuck Palahniuk",
    year : 1999,
    actors : [
        "Brad Pitt",
        "Edward Norton"
    ]
  });

db.movies.insert({
    title : "Pulp Fiction",
    writer : "Quentin Tarantino",
    year : 1994,
    actors : [
        "John Travolta",
        "Uma Thurman"
    ]
    });

db.movies.insert({
    title : "Inglorious Basterds",
    writer : "Quentin Tarantino",
    year : 2009,
    actors : [
    "Brad Pitt",
    "Diane Kruger",
    "Eli Roth"
    ]
});

db.movies.insert({
    title : "The Hobbit: An Unexpected Journey",
    writer : "J.R.R. Tolkien",
    year : 2012,
    franchise : "The Hobbit"
});

db.movies.insert({
    title : "The Hobbit: The Desolation of Smaug",
    writer : "J.R.R. Tolkien",
    year : 2013,
    franchise : "The Hobbit"
});

db.movies.insert({
    title : "The Hobbit: The Battle of the Five Armies",
    writer : "J.R.R. Tolkien",
    year : 2012,
    franchise : "The Hobbit",
    synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
});

db.movies.insert({
    title : "Pee Wee Herman's Big Adventure",
    writer: "Phil Hartman",
    year: 1985

});


db.movies.insert({
    title: "Avatar"
});

db.movies.find({"writer":"Quentin Tarantino"});

db.movies.find({"actors":"Brad Pitt"});

db.movies.find({"franchise":"The Hobbit"});


db.movies.find({ "year": { $gte: 1990, $lt: 2000 } });

db.movies.find({ "year": { $not: { $gt: 2000, $lt: 2010 } }});

db.movies.updateOne({"title": 'The Hobbit: An Unexpected Journey'}, {$set: {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});

db.movies.updateOne({"title": 'The Hobbit: The Desolation of Smaug'}, {$set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}});

db.movies.updateOne({"title": 'Pulp Fiction'}, {$set: {"actors": "Samuel L. Jackson"}});

db.movies.createIndex( { synopsis: "text" } );

db.movies.find({$text: {$search: "bilbo" }}); 

db.movies.find({$text: {$search: "gandalf" }}); 

db.movies.find({$text: {$search: "bilbo -gandalf"}});

db.movies.find({$text: {$search: "dwarves hobbit"}}); 

db.movies.find({$text: {$search: "\"gold\" \"dragon\""}});

db.movies.deleteOne({"title": "Pee Wee Herman's Big Adventure"});

db.movies.deleteOne({"title": "Avatar"});

//users database collection

db.users.insert({
    username : "SallySmith",
    first_name : "Sally",
    last_name : "Smith"
});

db.users.insert({
    username : "JimmyHagen",
    full_name :
    {first : "Jimmy",
    last : "Hagen"}
});

//posts database collection



db.posts.insert(
  [  
    {
    username : "SallySmith",
    title : "Passes out at party",
    body : "Wakes up early and cleans house"
    },

    {
    username : "SallySmith",
    title : "Buys a House",
    body : "Living in a new neighborhood now"
    },

    {
    username : "SallySmith",
    title : "Reports a bug in your code",
    body : "Sends you a Pull Request"
    },

    {
        username : "JimmyHagen",
        title : "Borrows something",
        body : "Returns it when he is done"
    },
    {
        username : "JimmyHagen",
        title : "Borrows everything",
        body : "The end"
    },
{
    username : "JimmyHagen",
    title : "Forks your repo on github",
    body : "Sets to private"
}

]
    );

//comments collection
db.comments.insert(
    [
          {
            username: "SallySmith",
            comment: "Hope you got a good deal!",
            post: "62df2c67d8319e65b3b6813e"
          },
          
          {
            username: "SallySmith",
            comment: "What's mine is yours!",
            post: "62df2c67d8319e65b3b6813f"
          },

          {
            username : "SallySmith",
            comment : "Don't violate the licensing agreement!",
            post : "62df2c67d8319e65b3b68140"
          },

          {
            username: "JimmyHagen",
            comment: "It still isn't clean",
            post: "62df2a78d8319e65b3b6813b"
          },

          {
            username : "JimmyHagen",
            comment : "Denied your PR cause I found a hack",
            post : "62df2b24d8319e65b3b6813d"
          }
    ]
);

//querying related collections

db.users.find({});

db.posts.find({});

db.posts.find({username:"SallySmith"});

db.posts.find({username:"JimmyHagen"});

db.comments.find({});

db.comments.find({username:"SallySmith"});

db.comments.find({username:"JimmyHagen"});

db.comments.find({ post: "62df2b24d8319e65b3b6813d" });