// Protege las rutas del dashboard
(function protect() {
  const path = location.pathname.toLowerCase();
  const userData = sessionStorage.getItem('sg_user');
  const user = userData ? JSON.parse(userData) : null;

  if (!user) {
    location.href = '../index.html#login-required';
    return;
  }

  const isSocio = path.includes('socio.html');
  const isOper = path.includes('operaciones.html');

  if (isSocio && user.role !== 'socio') {
    location.href = '../index.html#forbidden';
  }

  if (isOper && user.role !== 'operaciones') {
    location.href = '../index.html#forbidden';
  }
})();
