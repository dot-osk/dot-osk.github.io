
function openBingSearch() {
    var searchKeyWords = document.querySelector("form.widget-search__form input.widget-search__field").value;
    searchKeyWords = searchKeyWords.replace(/((^\s*)|(\s*$))/gm, '');

    if (searchKeyWords.length === 0) {
        console.log('ignore empty search.');
        return;
    }

    var targetUrl = 'https://www.bing.com/search?q=' + 
        encodeURI(searchKeyWords) + '+site:' + document.domain;
    
    // document.location.href = targetUrl;
    window.open(targetUrl, '_blank').focus();
}


function changeSearchEngineToBing() {
    var searchForm = document.querySelectorAll("form.widget-search__form");
    if (!(searchForm.length === 1)) {
        console.warn("search widget not found or not unique. skip change search engine.");
        return ;
    }
    searchForm = searchForm[0];

    /* make sure the search input is exist */
    var searchInput = searchForm.querySelectorAll("input.widget-search__field");
    if (!(searchInput.length === 1)) {
        console.warn("search widget input element not found, skip change search engine.");
        return ;
    }
    searchInput = searchInput[0];

    searchForm.autocomplete = 'off';
    searchForm.action = '';
    searchForm.addEventListener("submit", function(e){
        e.preventDefault();
        openBingSearch();
    });

}

changeSearchEngineToBing();
