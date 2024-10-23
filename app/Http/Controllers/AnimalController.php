<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animals;
    public $name;

    public function __construct()
    {
        $this->animals = ['Kucing', 'Ayam', 'Ikan'];
    }

    public function index()
    {
        echo "Menampilkan data animals<br/>";
        foreach ($this->animals as $index => $animal) {
            echo "- " . $animal . "<br/>";
        }
    }

    public function store(Request $request)
    {
        $animalName = $request->input('name');

        if (is_string($animalName)) {
            array_push($this->animals, $animalName);
        }

        echo "Menambahkan hewan baru <br/>";
        $this->index();
    }

    public function update(Request $request, $id)
    {

        if (isset($this->animals[$id])) {
            $this->animals[$id] = $request->input('name');
            echo "Mengupdate data hewan id " . ($id) . "<br/>";
            $this->index(); 
        } else {
            echo "ID tidak ditemukan<br/>";
        }
    }

    // Method untuk menghapus data hewan
    public function destroy($id)
    {

        if (isset($this->animals[$id])) {
            echo "Menghapus data hewan id " . ($id) . "<br/>";
            array_splice($this->animals, $id, 1); 
            $this->index();
        } else {
            echo "ID tidak ditemukan<br/>";
        }
    }
}
