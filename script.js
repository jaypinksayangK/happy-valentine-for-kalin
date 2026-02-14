document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('valentineMusic');
    const yesBtn = document.getElementById('yesBtn');
    const envelope = document.getElementById('envelope');
    const finalContent = document.getElementById('finalContent');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelopeHint = document.getElementById('envelopeHint');

    // Fungsi pindah halaman
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // Klik YES -> Musik jalan & Pindah Hal 2
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            if (music) {
                music.volume = 0.4;
                music.play().catch(() => console.log("Musik butuh interaksi user"));
            }
            showPage('page2');
        });
    }

    // Navigasi Standar
    document.getElementById('nextToPage3')?.addEventListener('click', () => showPage('page3'));
    document.getElementById('nextToPage4')?.addEventListener('click', () => showPage('page4'));
    document.getElementById('nextToPage5')?.addEventListener('click', () => showPage('page5'));

    // Halaman Bunga
    document.getElementById('takeBouquet')?.addEventListener('click', function() {
        document.getElementById('bouquetMessage').classList.remove('hidden');
        this.classList.add('hidden');
        document.getElementById('nextToPage4').classList.remove('hidden');
    });

    // --- LOGIKA BUKA AMPLOP (FIXED) ---
    if (envelope) {
        envelope.addEventListener('click', () => {
            // 1. Tambah class .opened (sesuai CSS kamu)
            envelope.classList.add('opened');
            if (envelopeHint) envelopeHint.classList.add('fade');

            // 2. Tunggu animasi amplop (1.2 detik)
            setTimeout(() => {
                // 3. Hilangkan amplop, munculkan pesan final
                envelopeWrapper.classList.add('hidden');
                finalContent.classList.remove('hidden');
                finalContent.classList.add('reveal');
            }, 1500);
        });
    }

    // Tombol Copy
    document.getElementById('copyBtn')?.addEventListener('click', () => {
        const text = document.getElementById('finalMessage').innerText;
        navigator.clipboard.writeText(text);
        const notif = document.getElementById('copyNotif');
        notif.classList.remove('hidden');
        setTimeout(() => notif.classList.add('hidden'), 2000);
    });

    // Tombol Restart
    document.getElementById('restartBtn')?.addEventListener('click', () => location.reload());

    // Tombol No kabur
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });
    }
});