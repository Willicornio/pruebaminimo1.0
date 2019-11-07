const Student = require('../models/student');
const Subjects = require('../models/subjects');

const usuarioCtrl = {};

usuarioCtrl.getAllStudents =  async (req, res) => {

    const listaStudents= await Student.find();
    res.json(listaStudents);
 }

usuarioCtrl.getSubjects =  async (req, res) => {

   const listaSubjects= await Subjects.find();
   res.json(listaSubjects);
}

usuarioCtrl.createStudent = async (req, res) => {

    const student = new Student({

        name: req.body.name,
        adress: req.body.adress,
        phones: req.body.phones

    });
      await student.save();
    res.json({

        status: "200"
    });
};

usuarioCtrl.createSubject = async (req, res) => {

    const subject = new Subjects({

        name: req.body.name,
        students: ''

    });
      await subject.save();
    res.json({

        status: "200"
    });
};

usuarioCtrl.getStudent = async(req, res)=>{
 console.log(req.params);
 try{
     const student = await Student.findOne({name: req.params.name});
    res.json(student);
 }
 catch
  {res.json({status: '404'});}
};

usuarioCtrl.getSubject = async(req, res)=>{
    console.log(req.params);
    try{
        const subject = await Subjects.findOne({name: req.params.name});
       res.json(subject);
    }
    catch
     {res.json({status: '404'});}
   };

usuarioCtrl.añadirStudent =  async (req, res) => {
    try{
   
    const { id } = req.params;
    const cambioDeLista = {
        students: req.body.name // liststudents + ";" + 

    };
    await Subjects.findByIdAndUpdate(id, {$addToSet: cambioDeLista}, {new: true});
    res.json({status: '200'});
}
catch{
    res.json({status: '404'});
}
};

// usuarioCtrl.login = async (req, res) => {

//     try{
//   const user = await Usuario.findOne({name : req.body.name, pass : req.body.pass});
    
//     res.json(user);
//     }
//     catch
//     {res.json({status: '200'});}
// };


usuarioCtrl.deleteUsuario =  async (req, res) => {
    try{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: '200'});
}
catch
{res.json({status: '404'});}
};

module.exports = usuarioCtrl; 
