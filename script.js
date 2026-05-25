// ── Modal PRO Features ────────────────────────────────────────────────────────
function openModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Modal Launch ──────────────────────────────────────────────────────────────
function openModalLaunch() {
  const overlay = document.getElementById('modalOverlay2');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalLaunch() {
  const overlay = document.getElementById('modalOverlay2');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Fermer avec la touche Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeModalLaunch();
  }
});
