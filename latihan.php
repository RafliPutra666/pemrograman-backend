<?php
class Animal {
    public $animals;

    public function __construct($initialAnimals = []) {
        $this->animals = $initialAnimals;
    }

    public function index() {
        echo "Index - Menampilkan seluruh hewan" . PHP_EOL;
        foreach ($this->animals as $animal) {
            echo "- " . $animal . PHP_EOL;
        }
    }

    public function store($newAnimal) {
        $this->animals[] = $newAnimal;
        echo PHP_EOL . "Store - Menambahkan hewan baru (" . $newAnimal . ")" . PHP_EOL;
        $this->index();
    }

    public function update($index, $updatedAnimal) {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $updatedAnimal;
            echo PHP_EOL . "Update - Mengupdate hewan" . PHP_EOL;
            $this->index();
        } else {
            echo "Hewan di index " . $index . " tidak ditemukan." . PHP_EOL;
        }
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            $removedAnimal = $this->animals[$index];
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
            echo PHP_EOL . "Delete - Menghapus hewan" . PHP_EOL;
            $this->index();
        } else {
            echo "Hewan di index " . $index . " tidak ditemukan." . PHP_EOL;
        }
    }
}

$animal = new Animal(["Ayam", "Ikan"]);

$animal->index();

$animal->store("Burung");

$animal->update(0, "Kucing Anggora");

$animal->destroy(1);
?>

<?php 
 
