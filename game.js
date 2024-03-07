function displayVisitedPages() {
  var visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
  var visitedPagesContainer = document.getElementById('visitedPages');
  visitedPagesContainer.innerHTML = '<h2>Visited Pages:</h2>';
  if (visitedPages.length === 0) {
    visitedPagesContainer.innerHTML += '<p>No pages visited yet.</p>';
  } else {
    visitedPages.forEach(function (page) {
      visitedPagesContainer.innerHTML += `<button onclick="goToPage('${page}')">${page}</button>`;
    });
  }
}
function goToPage(page) {
  window.location.href = page;
}
