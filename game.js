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

function performSearch() {
    var searchQuery = document.getElementById('search').value.toLowerCase();
    var fileLinks = getServerFileLinks();
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = "";

    for (var i = 0; i < fileLinks.length; i++) {
        var fileName = fileLinks[i].name.toLowerCase();

        if (fileName.includes(searchQuery)) {
            var resultItem = document.createElement('a');
            resultItem.textContent = fileLinks[i].name;
            resultItem.href = fileLinks[i].link;
            searchResultsDiv.appendChild(resultItem);
        }
    }

    var buttons = document.getElementsByClassName('game_button');
    for (var j = 0; j < buttons.length; j++) {
        var buttonName = buttons[j].textContent.toLowerCase();
        if (!buttonName.includes(searchQuery)) {
            buttons[j].style.display = 'none';
        } else {
            buttons[j].style.display = 'block';
        }
    }
}
