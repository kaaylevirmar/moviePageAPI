
const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    e.preventDefault();




    const searchTerm = form.elements.q.value.trim();

    if (searchTerm === "") {
     alert("Please Enter Title!")
    }else{
        const config = {
            params: {
                q: searchTerm
            },
            headers: {}
        };
        const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
        displayImage(res.data);
    }




    form.elements.q.value = '';





})

const displayImage = (shows) => {

    const searchResult = document.querySelector('#searchResult');
    searchResult.innerHTML = "";
    for (let key of shows) {



        const image = key.show.image.medium;
        const name = key.show.name;
        const summary = key.show.summary;
        const rating = key.show.rating.average || 'N/A';
        const genre = key.show.genre;



        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
                <img src="${image}" alt="sample" id="movieImg">
    
                <div class="movie-info">
                    <b id="movieTitle">${name}</b>
                    <span class="green">${rating}</span>
                    
                </div>
    
                <div class="overview">
    
                    ${summary}  
                    <p><b>Genre:</b> ${genre}</p>  
                </div>
                
                
                
                
                `
        searchResult.append(movieEl);
    }

}
