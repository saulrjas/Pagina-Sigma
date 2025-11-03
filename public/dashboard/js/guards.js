// Protege las rutas del dashboard
// public/js/auth.js

// 🔹 Simulación de usuarios (igual que antes)
const socios = [
  { email: 'asesor1@sigma.com', pass: 'demo123', role: 'socio' },
  { email: 'asesor2@sigma.com', pass: 'demo123', role: 'socio' },
  { email: 'asesor3@sigma.com', pass: 'demo123', role: 'socio' },
];

const operaciones = [
  { email: 'ops1@sigma.com', pass: 'ops123', role: 'operaciones' },
  { email: 'ops2@sigma.com', pass: 'ops123', role: 'operaciones' },
  { email: 'ops3@sigma.com', pass: 'ops123', role: 'operaciones' },
];

const users = [...socios, ...operaciones];

// 🔹 Helper para redirigir según rol
function redirectToDashboard(role) {
  // Como index.html está en /public, y los dashboards en /public/dashboard,
  // este path relativo funciona tanto local como en GitHub Pages (si public es el root).
  if (role === 'socio') {
    window.location.href = 'dashboard/socio.html';
  } else if (role === 'operaciones') {
    window.location.href = 'dashboard/operaciones.html';
  } else {
    // Si por alguna razón el rol es desconocido:
    window.location.href = 'index.html#login';
  }
}

// 🔹 Login principal
function loginUser(email, password) {
  const user = users.find(u => u.email === email && u.pass === password);
  if (!user) {
    alert('❌ Credenciales inválidas');
    return;
  }

  // Guarda la sesión (mínima) para que el guard del dashboard la use
  sessionStorage.setItem('sg_user', JSON.stringify({
    email: user.email,
    role: user.role
  }));

  // Opcional: muestra el loader si lo tienes disponible
  if (window.SigmaUI?.showLoader) window.SigmaUI.showLoader();

  // Redirige al dashboard correspondiente
  redirectToDashboard(user.role);
}

// 🔹 Exponer global si lo llamas desde HTML
window.loginUser = loginUser;
