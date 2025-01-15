// import Model Patient
const Patient = require("../models/Patient");
// buat class PatientController
class PatientController {

  async index (req, res) { 
    try { 
      const patient = await Patient.all(); 
      const data = { 
        message: "Menampilkan seluruh resource", 
        data: patient, 
      }; 
      res.status(200).json(data); 
    } catch (error) { 
      res.status(200).json({ 
        message: "Data is empty", 
        error: error.message, 
      }); 
    } 
  }
  async store (req, res) { 
    const { id, name, phone, address, status, in_date_at, out_date_at } = req.body; 
    try { 
      const patients = await Patient.create({ 
        id, name, phone, address, status, in_date_at, out_date_at 
      }); 
      const data = { 
        message: "Resource is added successfully", 
        data: patients, 
      }; 
      res.status(201).json(data); 
    } catch (error) { 
      res.status(422).json({ 
        message: "All fields must be filled correctly", 
        error: error.message, 
      }); 
    } 
  }

  async update(req, res) {
    // ambil id dari parameter
    const { id } = req.params;
    // ambil data dari body
    const data = req.body;
  
    try {
      // await untuk menunggu hasil dari pemanggilan method update() pada model student
      const patient = await Patient.update(id, data);
  
      const response = {
        message: "Data berhasil diubah",
        data: patient,
      };
  
      return res.status(200).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }
  
  async destroy (req, res) { 
    const { id } = req.params; 
    try { 
      const patients = await Patient.delete(id); 
      const data = { 
        message: "Resource is deleted successfully", 
        data: patients, // data pasien yang sudah dihapus 
      }; 
      res.status(200).json(data); // mengirimkan respons status 200 setelah penghapusan 
    } catch (error) { 
      // menangani error jika data pasien tidak ditemukan atau terjadi kesalahan lain 
      res.status(404).json({ 
        message: "Resource Not Found", // pesan jika pasien tidak ditemukan 
        error: error.message, // pesan error dari exception 
      }); 
    } 
  }
  







}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
