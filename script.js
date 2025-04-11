function loadContent(pageId) {
  fetch('pages/' + pageId + '.html')
    .then(response => response.text())
    .then(html => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      const main = document.querySelector('main');
      main.innerHTML = '';

      // Use all inner HTML (instead of only <section>)
      setTimeout(() => {
        main.innerHTML = tempDiv.innerHTML;
      }, 100);
      
    });
}

window.onload = function () {
  loadContent('home');
};
