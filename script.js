// condition fariabel true / false
const harga = 50.000
const baju = harga < 100.000 ? "murah" : "mahal";
console.log(baju)

// condition fariabel true
const kaos = "M"
const ukuranKaos1 = kaos === "M" && "sedang"
console.log(ukuranKaos1)

// condition fariabel false
const ukuranKaos2 = kaos === "L" || "tidak cocok ukuranya"
console.log(ukuranKaos2)

// data
const celana = [
    {
        nama: "jeans",
        harga: 50000
    },
    {
        nama: "cargo",
        harga: 100000
    },
    {
        nama: "chinos",
        harga: 150000
    },
    {
        nama: "training",
        harga: 200000
    },
]

// map (Fungsi method map pada JavaScript adalah untuk membuat array baru dari memanggil sebuah function pada setiap elemen array.)
const brendCelana = celana.map((brend) => brend.nama)
console.log(brendCelana)

const listNilai = celana.map((nilai) => nilai.harga + 2000)
console.log(listNilai)

// filter (merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.)
const nilai = celana.filter((kategori) => kategori.harga > 50000)
console.log(nilai)