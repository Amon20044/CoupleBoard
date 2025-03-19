import express from 'express';
import { createNewAlbum, getUserAlbums } from '../controllers/albumController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { upload } from '../utils/multer.js';
const albumRoutes = express.Router();

// Route to create a new album
albumRoutes.post('/create',authenticateUser,upload,createNewAlbum);

// Route to get albums by user ID
albumRoutes.get('/:id',authenticateUser, getUserAlbums);

export {albumRoutes};
