export function loadNavbar() {
  fetch('/components/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
    })
    .catch(err => console.error('Failed to load navbar:', err));
}
