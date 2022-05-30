import express from 'express';

import { createRecette,getRecettes,updateRecette,deleteRecette,getOneRecette } from '@controllers/recette.controller';

const router = express.Router();


router.post('/add', createRecette);
router.get('/getAll', getRecettes);
router.get('/get/:id', getOneRecette);
router.patch('/update/:id', updateRecette);
router.delete('/delete/:id', deleteRecette);

export { router };