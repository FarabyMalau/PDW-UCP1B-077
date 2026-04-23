document.addEventListener('DOMContentLoaded', () => {
    loadData();
    const memberBody = document.getElementById('memberBody');
    
    if (memberBody) {
        memberBody.innerHTML = members.map((m, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${m.nama}</td>
                <td>${m.email}</td>
                <td>${m.minat}</td>
            </tr>
        `).join('');
    }
});