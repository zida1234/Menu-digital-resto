// Tombol WA di hero
document.getElementById("wa-btn").addEventListener("click", function() {
  const nomorWA = "6281234567890"; // ganti nomormu
  const pesan = encodeURIComponent("Halo, saya ingin memesan makanan di Restoran MYZIII 🍽️");
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
});

// Tombol WA di menu
function pesan(menu) {
  const nomorWA = "6281234567890";
  const pesan = encodeURIComponent(`Halo, saya mau pesan *${menu}* dari Restoran MYZIII 😋`);
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
}

// Form Pemesanan
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const menu = document.getElementById("menuPesanan").value;
  const catatan = document.getElementById("catatan").value;
  const nomorWA = "6281234567890";
  
  const pesan = encodeURIComponent(
    `Halo, saya *${nama}* ingin memesan:\n\n🍽️ Menu: *${menu}*\n📝 Catatan: ${catatan || "-"}`
  );
  
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
});
