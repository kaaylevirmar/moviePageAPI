
const getFeatrueMovies = async () => {
    const res = await axios.get('https://api.tvmaze.com/shows');
    
    const displayMovie = document.querySelector('#displayMovie')

    

    for(let i = 0; i < 10; i++){

        const span = document.createElement('span');
        displayMovie.append(span);
        const img = document.createElement('img');
        img.src = res.data[i].image.medium;

        span.append(img);
        
     
       
    }
}


getFeatrueMovies()

