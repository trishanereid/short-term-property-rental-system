const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/api/v1/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/api/v1/user/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
