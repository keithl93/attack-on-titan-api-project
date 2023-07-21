import { Router } from "express";
import * as controllers from '../controllers/characters.js';

const router = Router();

//setting up the routes
router.get("/", controllers.getCharacters);
router.get("/:name", controllers.getCharacter);
router.get("/species/:species", controllers.getSpecies);
router.post("/", controllers.createCharacter);
router.put("/:name", controllers.updateCharacter);
router.delete("/:name", controllers.deleteCharacter);


export default router;