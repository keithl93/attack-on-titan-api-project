# Attack On Titan characters API Project

Attack On Titan characters API where you can type their names to see their background and image

## Routes

router.get("/api/characters", controllers.getCharacters);

router.get("/api/characters/:name", controllers.getCharacter);

router.get("/api/characters/id/:id", controllers.getCharactersById);

router.get("/api/characters/species/:species", controllers.getSpecies);

router.post("/api/characters/", controllers.createCharacter);

router.put("/api/characters/:name", controllers.updateCharacter);

router.delete("/api/characters/:name", controllers.deleteCharacter);

Deployed API:

https://aot-api-7ef9780170ea.herokuapp.com/

Reference:
https://github.com/ZachMcM/attack-on-titan-api/blob/master/data/characters.json
