# Attack On Titan characters API Project

Attack On Titan characters API where you can type their names to see their background and image!

## Routes

router.get("/", controllers.getCharacters);

router.get("/:name", controllers.getCharacter);

router.get("/id/:id", controllers.getCharactersById);

router.get("/species/:species", controllers.getSpecies);

router.post("/", controllers.createCharacter);

router.put("/:name", controllers.updateCharacter);

router.delete("/:name", controllers.deleteCharacter);

Reference:
https://github.com/ZachMcM/attack-on-titan-api/blob/master/data/characters.json
