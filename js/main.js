(function () {

    function Movie(){
        debugger
        var searchBtn = document.getElementById('searchbtn');
        searchBtn.addEventListener('click',function(event){
            var searchText = document.getElementById('searchtext').value
            var availableMoviesRaw = localStorage.getItem('popular-movies');
            if(availableMoviesRaw){
                var availableMovies = JSON.parse(availableMoviesRaw).results;
                var filteredMovies = availableMovies.filter(function(_movie){
                    return(_movie.title.toLowerCase().indexOf(searchText.toLowerCase())>-1);
                });
                if(filteredMovies.length>0){
                    document.getElementById('renderArea').innerHTML = "";
                    this.movieListing(filteredMovies);

                }
            }
        }.bind(this))
    }

    Movie.prototype.loadPopularMovies = function(){
       const xhr = new XMLHttpRequest();
        method = "GET",
        url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";
        // Return it as a Promise
        return new Promise(function (resolve, reject) {
    
            xhr.onreadystatechange = function () {
    
                // Process the response
                if (xhr.status = 200 ) {
                    // If successful
                    resolve(xhr);
                } else {
                    // If failed
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
    
            };
    
            // Setup our HTTP request
            xhr.open(method, url, true);
    
            // Send the request
            request.send();
    
        });
    } 

    Movie.prototype.movieListing = function(movies){
        var totalMovies = movies.length;
        var renderArea = document.getElementById('renderArea');
        var row = document.createElement('div');
        row.className = "row";
        var mytest =  `sdfsfsdf ${totalMovies}`;

        for(var i=0; i<totalMovies; i++){
            var movieContainer = document.createElement('div');
            movieContainer.className = "card col-md-4";
            movieContainer.style.width = "18rem";

            var cardBody = document.createElement('div');

            var cardTitle = document.createElement('h5');
            cardTitle.innerText = movies[i]["title"];

            var cardText = document.createElement('p');
            cardText.innerText = movies[i]["overview"];

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            movieContainer.appendChild(cardBody)
            row.appendChild(movieContainer);
            // movieContainer.innerText = movies[i]["title"];
            renderArea.appendChild(row);
        }
    }

    var movieInstance = new Movie();
    movieInstance.loadPopularMovies();
     movieInstance.loadPopularMovies(function (results){
        console.log(results)
        //implement using promise.
    });

})();
