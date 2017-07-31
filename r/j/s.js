(function(){
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      if (results.length === 1) {
        appendString += '<h3>' + results.length + ' search result was found</h3>';
      } else if (results.length > 1) {
        appendString += '<h3>' + results.length + ' search results were found</h3>';
      }

      for (var i = 0; i < results.length; i++) { // Iterate over the results
        var item = store[results[i].ref];

        appendString += '<a href="' + item.url + '">' + '<img src="' + item.img_src + '" alt ="DOTSLASHLINUX - ' + item.img_alt + '" class="img-responsive post-img"></a>';
        appendString += '<h3><a href="' + item.url + '">' + item.title + '</a></h3>';
        appendString += '<h5>Written on ' + item.date + ' by <em>' + item.author + '</em></h5>';
      }
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = 'No results found';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function() {
      this.field('id');
      this.field('img_src');
      this.field('img_alt');
      this.field('title');
      this.field('author');
      this.field('date');
      this.field('readtime');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'img_src': window.store[key].img_src,
        'img_alt': window.store[key].img_alt,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'date': window.store[key].date,
        'readtime': window.store[key].readtime,
        'commentscount': window.store[key].commentscount,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
