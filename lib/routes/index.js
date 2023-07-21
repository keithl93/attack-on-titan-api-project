import { Router } from 'express';
import charactersRoutes from './characters.js'

const router = Router();

router.get('/', (req, res) => {
  res.send('API root')
});

router.use('/characters', charactersRoutes);

export default router;