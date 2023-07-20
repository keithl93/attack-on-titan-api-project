import db from '../db/connection.js'
import Character from '../models/characters.js'
import characters from '../db/characters.json' assert{ type: "json" };

let charactersData = characters.map(item => {
  const chrs = {}
  chrs.ids = item.id
  chrs.name = item.name
  chrs.alias = item.alias
  chrs.species = item.species
  chrs.gender = item.gender
  chrs.age = item.age
  chrs.status = item.status
  chrs.occupation = item.occupation
  chrs.roles = item.roles
  return chrs
})



const insertData = async () => {
  // reset the database
  await db.dropDatabase();

  // Insert Data
  await Character.create(charactersData);

  console.log("Data Seeded!");

  // Close the DB
  await db.close();
};

insertData();



// Character.deleteMany({}).then(() => {
//   Character.create(characters).then(characters => {
//     console.log(characters);
//     process.exit();
//   });
// });
