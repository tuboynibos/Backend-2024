// TODO 3: Import data students dari folder data/students.js
// code here
const students = require('../data/students')

// Membuat Class StudentController
class StudentController {
    index(req, res) {
      // TODO 4: Tampilkan data students
      const data = {
        "message" : "Menampilkan semua students", 
        "data" : students
      }
      
      res.status(200).json(data)
    }
    
    store(req, res) {
        // TODO 5: Tambahkan data students
        const {name}= req.body;
        students.push(name)
        const data = {
          "message" : `Menambahkan nama students : ${name}`, 
          "data" : students
        }
        res.status(201).json(data)
    }
    
    
    update(req, res) {
        // TODO 6: Update data students
        const {id}= req.params;
        const {name}=req.body;
        students[id] = name;
        const data = {
          "message" : `Mengedit students dengan id ${id} : ${name}`, 
          "data" : students
        }
      res.status(200).json(data)
    }
  
    destroy(req, res) {
      // TODO 7: Hapus data students
      // code here
      const[id] = req.params;
      students[id] = name;
        const data = {
          "message" : `Menghapus students id ${id}` , 
          "data" : students
        };

    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController destroy(req, res) {
  
  
  module.exports = object;