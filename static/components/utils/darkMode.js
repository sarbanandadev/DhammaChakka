export default function darkMode() {
  
  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'on');
    darkMode.checked = darkThemeSelected;
    darkThemeSelected ? document.body.setAttribute('dark-mode', 'on'): document.body.removeAttribute('dark-mode');
  }

  function resetTheme() {
    if (darkMode.checked) {
      document.body.setAttribute('dark-mode', 'on');
      localStorage.setItem('darkMode', 'on');
    } else {
      document.body.removeAttribute('dark-mode');
      localStorage.removeItem('darkMode');
    }
  }

  var darkMode = document.getElementById('darkMode');

  if (darkMode) {
    initTheme();
    darkMode.addEventListener('change', function(event) {
      resetTheme();
    });
  }
};