document.addEventListener('DOMContentLoaded', function() {
    // Inicializace Smooth Scrollbar
    const Scrollbar = window.Scrollbar;
    const scrollbar = Scrollbar.init(document.querySelector('.movieScrollContainer'));

    // Změň styl scrollbar
    const scrollbarThumbX = document.querySelector('.scrollbar-thumb.scrollbar-thumb-x');
    const scrollbarThumbY = document.querySelector('.scrollbar-thumb.scrollbar-thumb-y');

    if (scrollbarThumbX) {
        scrollbarThumbX.style.backgroundColor = 'white';
        scrollbarThumbX.style.borderRadius = '6px';
    }

    if (scrollbarThumbY) {
        scrollbarThumbY.style.backgroundColor = 'white';
        scrollbarThumbY.style.borderRadius = '6px';
    }

    // Příklad generování filmů
    const movies = [
        { image: 'films/avengers_endgame/poster.png', page: 'films/avengers_endgame/film.html' },
        // Přidej další filmy dle potřeby
    ];

    const movieContainer = document.getElementById('movieContainer');
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.style.backgroundImage = `url(${movie.image})`;
        
        movieElement.addEventListener('click', function() {
            window.location.href = movie.page;
        });

        movieContainer.appendChild(movieElement);
    });
});
