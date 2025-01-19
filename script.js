const inputs = document.querySelectorAll('input[data-item]');
const totalHargaEl = document.getElementById('total-harga');
const bayarEl = document.getElementById('bayar');
const strukEl = document.getElementById('struk');
const rincianBelanjaEl = document.getElementById('rincian-belanja');
const strukTotalEl = document.getElementById('struk-total');
const strukBayarEl = document.getElementById('struk-bayar');
const strukKembalianEl = document.getElementById('struk-kembalian');

function hitungTotal() {
    let total = 0;
    inputs.forEach(input => {
        const jumlah = parseInt(input.value) || 0;
        const harga = parseInt(input.dataset.price);
        total += jumlah * harga;
    });
    totalHargaEl.textContent = total;
}

function prosesPembayaran() {
    const total = parseInt(totalHargaEl.textContent);
    const bayar = parseInt(bayarEl.value) || 0;

    if (bayar < total) {
        alert("Uang yang dibayar kurang!");
        return;
    }

    let rincianBelanja = "";
    inputs.forEach(input => {
        const jumlah = parseInt(input.value) || 0;
        if (jumlah > 0) {
            const nama = input.dataset.item;
            const harga = parseInt(input.dataset.price);
            rincianBelanja += `${nama} x${jumlah} = Rp ${jumlah * harga}<br>`;
        }
    });

    rincianBelanjaEl.innerHTML = rincianBelanja;
    strukTotalEl.textContent = total;
    strukBayarEl.textContent = bayar;
    strukKembalianEl.textContent = bayar - total;

    strukEl.style.display = "block";
}

inputs.forEach(input => {
    input.addEventListener('input', hitungTotal);
});
