import { Router } from 'express';
import charactersRoutes from './characters.js'

const router = Router();

router.use('/api/characters', charactersRoutes);

router.get('/', (req, res) => {
  res.send('API root')
});


export default router;

