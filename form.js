function submitForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const minat = document.getElementById('minat').value;

    if (!nama || !email || !minat) {
        alert("Harap isi semua data!");
        return;
    }

    // Tangkap data dan simpan ke array [cite: 23, 25]
    loadData();
    const newMember = { nama, email, minat };
    members.push(newMember);
    saveData();

    // Tampilkan hasil di bagian bawah form [cite: 24]
    document.getElementById('resultPanel').style.display = 'block';
    document.getElementById('resultBody').innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Minat:</strong> ${minat}</p>
    `;
    
    alert("Pendaftaran Berhasil untuk " + nama); [cite: 24]
}