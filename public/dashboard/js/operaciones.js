document.addEventListener('DOMContentLoaded', () => {
  const pending = document.getElementById('pendingList');
  if (pending) pending.textContent = 'Aquí verás las solicitudes pendientes.';

  const btnLogout = document.getElementById('btnLogout');
  btnLogout?.addEventListener('click', () => {
    sessionStorage.removeItem('sg_user');
    location.href = '../index.html';
  });
});
