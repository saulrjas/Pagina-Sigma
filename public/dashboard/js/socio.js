document.addEventListener('DOMContentLoaded', () => {
  const cal = document.getElementById('calendar');
  if (cal) cal.textContent = 'Aquí irá el calendario de salas (prueba inicial).';

  const btnLogout = document.getElementById('btnLogout');
  btnLogout?.addEventListener('click', () => {
    sessionStorage.removeItem('sg_user');
    location.href = '../index.html';
  });
});
