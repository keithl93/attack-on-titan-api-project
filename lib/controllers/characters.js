import Characters from '../models/characters.js'

//collection of functions that handles HTTP requests in web API

//get all the characters
export const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.find();
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  };
};

//get characters by species
export const getSpecies = async (req, res) => {
  try {
    const { species } = req.params;
    const character = await Characters.find({ species: species });

    if (character) {
      return res.json(character);
    }

    res.status(404).json({ message: 'Species not found!' })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//get specific character
export const getCharacter = async (req, res) => {
  try {
    
    const { name } = req.params;
    const character = await Characters.find({ name: name });
    if (character) {
      return res.json(character);
    }

    res.status(404).json({ message: 'Character not found!' })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  };
};

//create
export const createCharacter = async (req, res) => {
  const character = new Characters(req.body)
  await character.save();
  res.status(201).json(house);
};

//update
export const updateCharacter = async (req, res) => {
  const { name } = req.params;
  const character = await Characters.findByIdAndUpdate(name, req.body);
  res.status(201).json(character);
}

//delete
export const deleteCharacter = async (req, res) => {
  try {
    const { name } = req.params;
    const character = await Characters.findByIdAndDelete(name);

    if (deleted) {
      return res.status(200).send("Character deleted");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};