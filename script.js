// Mengambil data dari localStorage atau inisialisasi array kosong
let members = JSON.parse(localStorage.getItem('techMembers')) || [];

// Fungsi Menambah Anggota (Hanya jalan di form.html)
const memberForm = document.getElementById('registrationForm');
if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newMember = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value
        };

        members.push(newMember);
        localStorage.setItem('techMembers', JSON.stringify(members));

        alert(`Selamat Datang, ${newMember.name}! Data Anda telah tersimpan.`);
        this.reset();
        
        // Tampilkan hasil input di bawah form
        document.getElementById('result').innerHTML = `
            <p><strong>Input Terakhir:</strong> ${newMember.name} (${newMember.interest})</p>
        `;
    });
}

// Fungsi Menampilkan Data (Hanya jalan di index.html)
const tableBody = document.getElementById('memberTableBody');
if (tableBody) {
    members.forEach(member => {
        let row = `<tr>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.interest}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}