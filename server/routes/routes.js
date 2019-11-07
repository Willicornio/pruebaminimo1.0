const express = require('express');
const router = express.Router();

const UsuCtrl = require('../controllers/controller');

router.get('/', UsuCtrl.getSubjects);
router.get('/allstudents', UsuCtrl.getAllStudents);
router.post('/student', UsuCtrl.createStudent);
router.post('/subject', UsuCtrl.createSubject);
router.get('/', UsuCtrl.getSubjects);
router.post('/', UsuCtrl.createStudent);
router.get('/subject/:name', UsuCtrl.getSubject);
router.get('/student/:name', UsuCtrl.getStudent);
router.put('/:id', UsuCtrl.añadirStudent);
// router.post('/login', UsuCtrl.login);
// router.delete('/:id', UsuCtrl.deleteStudent);



module.exports = router;
