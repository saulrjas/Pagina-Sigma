// Simulación de login básico
function loginUser(email, password) {
  const socios = [
    { email: 'asesor1@sigma.com', pass: 'demo123', role: 'socio' },
    { email: 'asesor2@sigma.com', pass: 'demo123', role: 'socio' },
  ];

  const operaciones = [
    { email: 'ops1@sigma.com', pass: 'ops123', role: 'operaciones' },
    { email: 'ops2@sigma.com', pass: 'ops123', role: 'operaciones' },
  ];

  const users = [...socios, ...operaciones];
  const user = users.find(u => u.email === email && u.pass === password);

  if (!user) {
    alert('❌ Credenciales inválidas');
    return;
  }

// Guarda la sesión
sessionStorage.setItem('sg_user', JSON.stringify({ email: user.email, role: user.role }));

// Mostrar el loader y redirigir al dashboard correspondiente
if (user.role === 'socio') {
  SigmaUI.navigateWithLoader('dashboard/socio.html');
} 
else if (user.role === 'operaciones') {
  SigmaUI.navigateWithLoader('dashboard/operaciones.html');
}
}
