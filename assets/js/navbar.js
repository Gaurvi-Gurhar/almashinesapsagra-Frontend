function includeHTML(selector, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(err => console.error("Include failed:", err));
}

// Load navbar and footer
includeHTML("#navbar", "components/navbar.html");
includeHTML("#footer", "components/footer.html");
