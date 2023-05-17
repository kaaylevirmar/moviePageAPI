



const getFeatrueMovies = async () => {

    const res = await axios.get('https://api.tvmaze.com/shows');

    const data = res.data;
   

    const randomMovies = document.querySelector('#randomMovies');

    for (let i = 0; i < 12; i++) {

        const number = Math.floor(Math.random() * 249) + 1;
        const image = data[number].image.medium;
        const name = data[number].name;
        const summary = data[number].summary;
        const rating = data[number].rating.average || 'N/A';
        const genre = data[number].genres;
        



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
        randomMovies.append(movieEl);



    }

}


getFeatrueMovies()



const getActionMovies = async () => {

    
    const res = await axios.get('https://api.tvmaze.com/shows');

    const data = res.data;

    console.log(data);
    

    const actionMovies = document.querySelector('#actionMovies');
        let actionCount = 0;
    for (let i = 0; i < data.length; i++) {
        
        if (data[i].genres[0] == 'Action' || data[i].genres[1] == 'Action' ||data[i].genres[2] == 'Action' ) {
            const image = data[i].image.medium;
            const name = data[i].name;
            const summary = data[i].summary;
            const rating = data[i].rating.average;
            const genre = data[i].genres;
            

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
            actionMovies.append(movieEl);
            actionCount++;
            if(actionCount === 12){
                break;
            }
    
        }

       



    }



}

getActionMovies()



const getDramaMovies = async () => {

    
    const res = await axios.get('https://api.tvmaze.com/shows');

    const data = res.data;
    

    const dramaMovies = document.querySelector('#dramaMovies');
        let dramaCount = 0;
    for (let i = 0; i < data.length; i++) {
        
        if (data[i].genres[0] == 'Drama' || data[i].genres[1] == 'Drama' ||data[i].genres[2] == 'Drama' ) {
            const image = data[i].image.medium;
            const name = data[i].name;
            const summary = data[i].summary;
            const rating = data[i].rating.average;
            const genre = data[i].genres;



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
            dramaMovies.append(movieEl);
            dramaCount++;
            if(dramaCount === 12){
                break;
            }
    
        }

       



    }

}

getDramaMovies()



