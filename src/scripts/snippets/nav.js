window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 960px)').matches) {
      document.getElementById('click').checked = false;
  }
}, true);