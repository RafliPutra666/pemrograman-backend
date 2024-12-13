/**
  Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
function showDownload(result) {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
  }
  
  /**
   * Fungsi untuk download file
   * @returns {Promise<string>} - Mengembalikan Promise dengan hasil download
   */
  function download() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  }
  
  // Menggunakan Async/Await
  async function handleDownload() {
    const result = await download();
    showDownload(result);
  }
  
  handleDownload();