// import Model Employee
const Employee = require("../models/Employee")
// buat class EmployeeController
class EmployeeController {
  // buat fungsi
  async index(req, res) {
    // TODO 4: Tampilkan data students
    const employee = await Employee.all();

    const data = {
        message: "Menampilkan data employees",
        data: employee
    };

    res.status(200).json(data);
}

async store(req, res) {
  /**
   * TODO 2: memanggil method create.
   * Method create mengembalikan data yang baru diinsert.
   * Mengembalikan response dalam bentuk json.
   */

  const employee = await Employee.create(req.body);
  const data = {
      message: "Menambahkan data employee",
      data: employee,
  };

  res.status(201).json(data);
}
async update(req, res) {
  /**
   * check id students
   * jika ada, lakukan update
   * jika tidak, kirim data tidak ada
   */
  const { id } = req.params;

  const employee = await Employee.find(id);

  if (employee) {
      // update data
      const employeeUpdated = await Employee.update(id, req.body);
      const data = {
          message: "Mengupdate data Employe",
          data: employeeUpdated,
      };

      res.status(200).json(data);
  }
  else {
      // kirim data tidak ada
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }



}

async destroy(req, res) {
  const { id } = req.params;

  /**
   * cari id
   * jika ada, hapus data
   * jika tidak, kirim data tidak ada
   */

  const employee = await Employee.find(id);

  if (employee) {
      // hapus data
      await Employee.delete(id);
      const data = {
          message: "Menghapus data employee",
      };

      res.status(200).json(data);
  }
  else {
      // data tidak ada
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }
}

async show(req, res) {
  /**
   * cari id
   * jika ada, kirim datanya
   * jika tidak, kirim data tidak ada
   */
  const { id } = req.params;

  const employee = await Employee.find(id);

  if (employee) {
      const data = {
          message: "Menampilkan detail data employee",
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }

}

async active(req, res) {
  const employee = await Employee.status_employe('active');
  if (employee) {
    const data = {
      message: 'Data yang statusnya Active',
      data: employee
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: 'Employee not found',
      data: null
    };
    res.status(404).json(data);
    }
  }


async inactive(req, res) {
  const employee = await Employee.status_employe('inactive');
  if (employee) {
    const data = {
      message: 'Data yang statusnya Inactive',
      data: employee
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: 'Employee not found',
      data: null
    };
    res.status(404).json(data);
    }
  }

async terminated(req, res) {
  const employee = await Employee.status_employe('terminated');
  if (employee) {
    const data = {
      message: 'Data yang statusnya Terminated',
      data: employee
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: 'Employee not found',
      data: null
    };
    res.status(404).json(data);
    }
  }

async search(req, res) {
  /**
   * cari nama
   * jika ada, kirim datanya
   * jika tidak, kirim data tidak ada
   */
  const { name } = req.params;

  const employee = await Employee.search(name);

  if (employee) {
      const data = {
          message: "Mencari data employee berdasarkan Name",
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }

}


}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
