


import express from 'express';
import adminController from '../admin-controller/page.js';




const router = express.Router();

router.get('/users',  adminController.getAllUsers);
router.get('/users/:id',adminController.getUserById);
router.get('/users/delete/:id',adminController.deleteUserById);

router.get('/contacts', adminController.getAllContacts);
router.get('/contacts/delete/:id',adminController.deleteContactById);

router.get('/courses', adminController.getAllCourses);
router.get('/courses/delete/:id', adminController.deleteCourseById);


export default router;