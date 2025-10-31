// Oculta el loader cuando la página termina de cargar
window.addEventListener('load', () => {
  const loader = document.getElementById('app-loader');
  if (loader) loader.classList.add('hidden');
});
/* ===== Control de Loader global ===== */
window.SigmaUI = window.SigmaUI || {};

(function () {
  const loader = document.getElementById('app-loader');

  function showLoader() {
    if (loader) loader.classList.add('show');
  }
  function hideLoader() {
    if (loader) loader.classList.remove('show');
  }

  // Exponer para que otros módulos lo usen (auth, dashboard, etc.)
  SigmaUI.showLoader = showLoader;
  SigmaUI.hideLoader = hideLoader;

  // Mostrar loader durante la carga inicial (mejor “perceived performance”)
  document.addEventListener('DOMContentLoaded', () => {
    showLoader();
  });
  window.addEventListener('load', () => {
    // dar un respiro para transiciones
    setTimeout(hideLoader, 180);
  });

  // Interceptar clicks en enlaces que deben mostrar loader
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-loader], button[data-loader]');
    if (!a) return;
    // Si el link tiene href y no es #, mostramos loader y dejamos que navegue
    const href = a.getAttribute('href');
    if (href && href !== '#') {
      showLoader();
      // no hacemos preventDefault; dejamos que el navegador navegue
    }
  });

  // Helper para redirecciones programáticas con efecto loader
  SigmaUI.navigateWithLoader = function (url, delay = 200) {
    showLoader();
    setTimeout(() => { window.location.href = url; }, delay);
  };
})();
(function () {
  const hideLoader = () => {
    const loader = document.getElementById('app-loader');
    if (!loader) return;
    loader.classList.add('hide');
    loader.setAttribute('aria-busy', 'false');
  };

  // Ocultar cuando la página termina de cargar
  window.addEventListener('load', hideLoader);

  // Fallback de seguridad (por si algo falla)
  setTimeout(hideLoader, 2500);
})();
