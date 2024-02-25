// Toggle mode gelap saat dokumen dimuat
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[type="checkbox"]');

    // Periksa status mode gelap dari penyimpanan lokal
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.div.classList.add('dark-mode');
        checkbox.checked = true;
    }

    // Toggle mode gelap saat checkbox diubah
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});


