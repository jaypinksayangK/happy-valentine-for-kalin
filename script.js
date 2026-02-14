// Tunggu sampai halaman siap
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('valentineMusic');
    const yesBtn = document.getElementById('yesBtn');
    const nextToPage3 = document.getElementById('nextToPage3');
    const nextToPage4 = document.getElementById('nextToPage4');
    const nextToPage5 = document.getElementById('nextToPage5');
    const envelope = document.getElementById('envelope');
    const finalContent = document.getElementById('finalContent');
    const envelopeWrapper = document.getElementById('envelopeWrapper');

    // 1. Fungsi Pindah Halaman
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // 2. Klik YES -> Putar Musik & Ke Halaman 2
    yesBtn.addEventListener('click', () => {
        if (music) music.play();
        showPage('page2');
    });

    // 3. Navigasi Halaman
    nextToPage3.addEventListener('click', () => showPage('page3'));
    
    // Di Halaman 3 (Bunga)
    document.getElementById('takeBouquet').addEventListener('click', function() {
        document.getElementById('bouquetMessage').classList.remove('hidden');
        this.classList.add('hidden');
        document.getElementById('nextToPage4').classList.remove('hidden');
    });

    nextToPage4.addEventListener('click', () => showPage('page4'));
    nextToPage5.addEventListener('click', () => showPage('page5'));

    // 4. LOGIKA BUKA AMPLOP (Bagian yang Error tadi)
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.add('open'); // Animasi buka
            
            // Tunggu sebentar biar animasinya kelihatan, lalu munculkan pesan
            setTimeout(() => {
                envelopeWrapper.classList.add('hidden');
                finalContent.classList.remove('hidden');
                finalContent.style.display = 'block';
            }, 1200);
        });
    }

    // 5. Tombol Copy Pesan
    document.getElementById('copyBtn').addEventListener('click', () => {
        const text = document.getElementById('finalMessage').innerText;
        navigator.clipboard.writeText(text);
        const notif = document.getElementById('copyNotif');
        notif.classList.remove('hidden');
        setTimeout(() => notif.classList.add('hidden'), 2000);
    });

    // 6. Tombol Restart
    document.getElementById('restartBtn').addEventListener('click', () => {
        location.reload();
    });

    // 7. Logika tombol No (Lari-lari)
    const noBtn = document.getElementById('noBtn');
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
});