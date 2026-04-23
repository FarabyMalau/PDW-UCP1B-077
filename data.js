// Array untuk menyimpan data anggota secara sementara [cite: 20, 25]
let members = [
    { nama: "Faraby Muzakki", email: "faraby@tech.com", minat: "Web Development" },
    { nama: "Budi Santoso", email: "budi@tech.com", minat: "Data Science" }
];

// Fungsi helper untuk menyimpan/mengambil data dari sessionStorage agar tidak hilang saat pindah halaman
function saveData() {
    sessionStorage.setItem('techMembers', JSON.stringify(members));
}

function loadData() {
    const saved = sessionStorage.getItem('techMembers');
    if (saved) members = JSON.parse(saved);
}