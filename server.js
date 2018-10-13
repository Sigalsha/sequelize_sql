const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://sql7260629:qNyL3f5qhG@sql7.freesqldatabase.com/sql7260629')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

// const Stock = sequelize.define('stock', {
//     ticker: {
//         type: Sequelize.STRING
//     },
//     date: {
//         type: Sequelize.DATE
//     },
//     open: {
//         type: Sequelize.FLOAT
//     },
//     close: {
//         type: Sequelize.FLOAT
//     }
// });

// Stock.sync();

// Stock.create({
//     ticker: "MSFT",
//     date: new Date(),
//     open: 120.82,
//     close: 123.51
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(),
//     open: 270.03,
//     close: 281.98
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(), //assume this was created at a later date
//     open: 284.14,
//     close: 290.33
// })

// Stock.findAll({}).then(stocks => {
//     console.log(stocks)
// });

// Stock.findAll({
//     where: {
//         ticker: "TSLA",
//         open: {
//             $lte: 260
//         }
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

// Stock.findAll({
//     where: {
//         $or: [
//             { ticker: "TSLA" },
//             { ticker: "MSFT" }
//         ]
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

// const Song = sequelize.define("song", {
//     title: Sequelize.STRING
// })

// const Artist = sequelize.define("artist", {
//     first_name: Sequelize.STRING
// })

// Artist.hasMany(Song)
// Artist.sync()
// Song.sync()

// Artist.create({ first_name: "Stephan Legar" })
// Artist.create({ first_name: "Cher" })
// Artist.create({ first_name: "Eric Clapton" })

// Song.create({
//     title: "Step Fun",
//     artistId: 5
// })

// Song.create({
//     title: "Comme ci comme ca",
//     artistId: 5
// })

// Song.create({
//     title: "Believe",
//     artistId: 6
// })

// Song.create({
//     title: "Layla",
//     artistId: 7
// })

// Song.create({
//     title: "Cocaine",
//     artistId: 7
// })

// Artist.find({
//     where: { id: 5 },
//     include: [Song]
// }).then(artist => {
//     console.log(artist.songs)
// })

// const Store = sequelize.define("store", {
//     name: Sequelize.STRING
// })

// const Customer = sequelize.define("customer", {
//     name: Sequelize.STRING
// })

// const Store_Customer = sequelize.define("Store_Customer", {})

// Store.belongsToMany(Customer, { through: Store_Customer })
// Customer.belongsToMany(Store, { through: Store_Customer })

// Store.sync()
// Customer.sync()
// Store_Customer.sync()

// Store.create({
//     name: "Walmart"
// }).then(s => {
//     Customer.create({
//         name: "John"
//     }).then(c => {
//         s.addCustomer(c)
//     })
// })

// const addRelationship = async function () {
//     let store = await Store.create({ name: "Target" })
//     let customer = await Customer.create({ name: "Julius" })
//     store.addCustomer(customer)
//     //alternatively, could also do customer.addStore(store)
// }

// addRelationship()

// Store.find({ where: { id: 6 }, include: [Customer] }).then(s => {
//     console.log(s)
// })

const Movie = sequelize.define("movie", {
    name: Sequelize.STRING
})

const Actor = sequelize.define("actor", {
   name: Sequelize.STRING 
})

const Director = sequelize.define("director", {
    name: Sequelize.STRING
})

const Actor_Movie = sequelize.define("Actor_Movie", {})
Actor.belongsToMany(Movie, { through: Actor_Movie })
Movie.belongsToMany(Actor, { through: Actor_Movie })

Director.hasMany(Movie)

// Movie.sync()
// Actor.sync()
// Director.sync()
// Actor_Movie.sync()

// const addRelationship1 = async function () {
//     let lionKing = await Movie.create({name: "Lion King"})
//     let jamesEJ = await Actor.create({name: "James Earls Jones"})
//     let jeremyI = await Actor.create({name: "Jeremy Irons"})
//     let robM = await Director.create({name: "Rob Minkoff"})
//     lionKing.addActor(jamesEJ, jeremyI)
//     lionKing.addActor(jeremyI)
//     lionKing.addDirector(robM)
// }

// addRelationship1()

// const addRelationship2 = async function () {
//     let lordOfTheRings = await Movie.create({name: 'Lord of the Rings'})
//     let ianMck = await Actor.create({name:'Ian McKellen'})
//     let elijahW = await Actor.create({name: 'Elijah Wood'})
//     let peterJ = await Director.create({name: 'Peter Jackson'})
//     lordOfTheRings.addActor(ianMck)
//     lordOfTheRings.addActor(elijahW)
//     lordOfTheRings.addDirector(peterJ)
// }

// addRelationship2()

// const addRelationship3 = async function () {
//     let lordOfTheLions = await Movie.create({name: 'Lord of the Lions'})
//     let ianMck = await Actor.create({name: 'Ian Mckellen'})
//     let jeremyI = await Actor.create({name: 'Jeremy Irons'})
//     let peterJ = await Director.create({name: 'Peter Jackson'})
//     lordOfTheLions.addActor(ianMck)
//     lordOfTheLions.addActor(jeremyI)
//     lordOfTheLions.addDirector(peterJ)
// }

// addRelationship3()

// Actor.drop();
// Director.drop();
