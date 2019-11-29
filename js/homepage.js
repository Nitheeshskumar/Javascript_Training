(function (){

    function Movie(){
        const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.themoviedb.org/3/movie/top_rated?api_key=06dcefc4c6268cb53b82f76560368636&language=en-US&page=1"


xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    debugger;
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    var Rawresponse = xhr.responseText;
    var JSONdata = JSON.parse(Rawresponse);
    List(JSONdata.results)
  }
};
xhr.send();
    }

    Movie.prototype.popularMovies = function(){
        
    }

    function popularMovies(){
    const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.themoviedb.org/3/movie/top_rated?api_key=06dcefc4c6268cb53b82f76560368636&language=en-US&page=1"


xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    debugger;
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    var Rawresponse = xhr.responseText;
    var JSONdata = JSON.parse(Rawresponse);
    List(JSONdata.results)
  }
};
xhr.send();
    }
    function List(movie){
        var area= document.getElementById("renderArea");
        var row =document.createElement('div');
        row.className="row"
        for (film in movie){
            var bag= document.createElement('div');
            bag.className="card col-md-3 ml-3 mb-3";
            bag.style.width="18rem";
            bag.style.border="10"
            bag.style.borderColor="red"

            var cardBody = document.createElement("div");
            var cardtitle = document.createElement("h5");
            cardtitle.innerHTML = movie[film]["title"];

            var cardtext = document.createElement("p");
            cardtitle.innerHTML = movie[film]["overview"];
            var img = document.createElement("img");
            img.src ="https://image.tmdb.org/t/p/w500/"+ movie[film]["poster_path"]
            img.width ="100"
            img.height="150"

            bag.innerText=movie[film]["title"];
            row.appendChild(bag)
            bag.appendChild(cardBody)
            cardBody.appendChild(cardtitle)
            cardBody.appendChild(cardtext);
            cardBody.appendChild(img)
            area.appendChild(row)
        }
    }

    popularMovies();

})();
