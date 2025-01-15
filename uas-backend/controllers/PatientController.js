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
        data: patients,
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
  
  async show(req, res) {
    const { id } = req.params;
    try {
      const patient = await Patient.find(id);
      const data = {
        message: `Menampilkan data patient dengan id ${id}`,
        data: patient,
      };
      return res.status(200).json(data);
    } catch (err) {
      // catch untuk menangkap error
      const data = {
        message: "Resource Not Found",
        error: err.message,
      };
      res.status(404).json(data);
    }
  }

  async search(req, res) {
    const { name } = req.params;
  
    try {
      // Memastikan nama yang diterima adalah string yang valid
      const patients = await Patient.search(name);
      console.log(patients);  // Log hasil pencarian
      
      if (patients.length === 0) {
        return res.status(404).json({
          message: "Pasien tidak ditemukan",
        });
      }
  
      res.status(200).json({
        message: "Data pasien ditemukan",
        data: patients,
      });
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mencari data pasien",
        error: error.message,
      });
    }
  }

  async positive(req, res) {
    try {
      const patients = await Patient.findByStatus("positive");
      if (patients.length === 0) {
        return res.status(404).json({
          message: "Pasien dengan status 'positive' tidak ditemukan",
        });
      }
  
      return res.status(200).json({
        message: `Menampilkan data pasien dengan status Positive`,
        data: patients,
      });
    } catch (err) {
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }
  async recovered(req, res) {
    try {
      const patients = await Patient.findByStatus("recovered");
      if (patients.length === 0) {
        return res.status(404).json({
          message: "Pasien dengan status 'recovered' tidak ditemukan",
        });
      }
  
      return res.status(200).json({
        message: `Menampilkan data pasien dengan status Recovered`,
        data: patients,
      });
    } catch (err) {
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }
  async dead(req, res) {
    try {
      const patients = await Patient.findByStatus("dead");
      if (patients.length === 0) {
        return res.status(404).json({
          message: "Pasien dengan status 'dead' tidak ditemukan",
        });
      }
  
      return res.status(200).json({
        message: `Menampilkan data pasien dengan status Dead`,
        data: patients,
      });
    } catch (err) {
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }




}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
