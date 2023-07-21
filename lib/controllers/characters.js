import Characters from '../models/characters.js'

export const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.find();
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  };
};

export const getCharacter = async (req, res) => {
  try {
    const { name } = req.params;
    const character = await Characters.findById(name);

    if (character) {
      return res.json(character);
    }

    res.status(404).json({ message: 'Character not found!' })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  };
};

export const createCharacter = async (req, res) => {
  const character = new Characters(req.body)
  await character.save();
  res.status(201).json(house);
};

export const updateCharacter = async (req, res) => {
  const { name } = req.params;
  const character = await Characters.findByIdAndUpdate(name, req.body);
  res.status(201).json(character);
}

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