//first load scrollDown
var loadTournament = function (event) {
    event.preventDefault();

    var slider = document.getElementById("slider");
    if (slider) slider.remove();

    var scrollDown = document.getElementById("scrollDown");
    if (scrollDown) scrollDown.remove();

    var cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = '';

    var matchWrapper = document.getElementById("matchWrapper");
    matchWrapper.innerHTML = '';

    var contactWrapper = document.getElementById("contactWrapper");
    contactWrapper.innerHTML = '';

    let cardTournamentWrapper = document.querySelector('#cardWrapper');
    cardTournamentWrapper.className = 'padding100';
    var tournamentContainer = document.createElement('div');
    tournamentContainer.className = 'tournament-container';
    tournamentContainer.id = 'tournament-container';
    tournamentContainer.innerHTML = `                                    
                            <div class="grid">
                                <div class="list-title-wrapper">
                                    <div class="list-title animate__animated animate__fadeInLeft animate__delay-1s">
                                        All Tournaments
                                    </div>
                                    <div class="nav-item dropdown dropdown-find-player">
                                        <div class="nav-link">Search</div>
                                        <div class="dropdown-menu dropdown-search">
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input del-val" id="search-input1" type="text" placeholder="Search by name">
                                                <button class="search-button" id="listTournament1">Search</button>
                                            </div>
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input del-val" id="search-input2" type="text" placeholder="Search by country">
                                                <button class="search-button" id="listTournament2">Search</button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container" id="card-container">
                                </div>   
                            </div>                                                              
                            `;
    cardTournamentWrapper.appendChild(tournamentContainer);
    //delete value of not-focus input
    var delVal = document.querySelectorAll('.del-val');
    for (var i = 0; i < delVal.length; i++) {
        delVal[i].addEventListener('focus', function () {
            for (var j = 0; j < delVal.length; j++) {
                if (delVal[j] !== this) {
                    delVal[j].value = '';
                }
            }
        });
    }
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {

            data.tournaments.forEach(item => {
                let card = document.createElement('a');
                card.classList.add('card', 'card3-res');
                card.innerHTML = `                                                                                                            
                                <div class="card-image">
                                    <img src="./assets/images/${item.logo}" alt="${item.logo}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">${item.country}</h5>
                                        <p class="card-content-des">${item.country}</p>
                                    </div>
                                </div>                                                                                                        
                                    `;
                let cardContainer1 = document.querySelector('#card-container');
                cardContainer1.appendChild(card);
            });

             //set animation in scroll
             const cards = document.querySelectorAll('.card');
             const observedElements = new Set();
 
             const observer = new IntersectionObserver(entries => {
                 entries.forEach(entry => {
                     if (entry.isIntersecting) {
                         if (!observedElements.has(entry.target)) {
                             entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                             observedElements.add(entry.target);
                         }
                     } else {
                         observedElements.delete(entry.target);
                         entry.target.classList.remove('animate__animated', 'animate__fadeInDown');
                     }
                 });
             }, {
                 threshold: [0],
                 rootMargin: '30% 0px 0px 0px' // top-r-b-L
             });
 
             cards.forEach(card => observer.observe(card));
        });

    //Loading data search by name
    const loadDataSearch = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //remove oldcard
                var oldCard = document.getElementsByClassName("card");
                while (oldCard.length > 0) {
                    oldCard[0].parentNode.removeChild(oldCard[0]);
                }

                let searchValue = document.querySelector('#search-input1').value.toLowerCase();
                let filteredData = data.tournaments.filter(item => item.name.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
                    let card = document.createElement('a');
                    card.classList.add('card', 'card3-res');
                    card.innerHTML = `
                                    <div class="card-image">
                                    <img src="./assets/images/${item.logo}" alt="${item.logo}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">Position ${item.country}</h5>
                                        <p class="card-content-des">Current team: ${item.country}</p>
                                    </div>
                                    </div>
                                `;
                    cardContainer.appendChild(card);
                });

                 //set animation in scroll
            const cards = document.querySelectorAll('.card');
            const observedElements = new Set();

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!observedElements.has(entry.target)) {
                            entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                            observedElements.add(entry.target);
                        }
                    } else {
                        observedElements.delete(entry.target);
                        entry.target.classList.remove('animate__animated', 'animate__fadeInDown');
                    }
                });
            }, {
                threshold: [0],
                rootMargin: '30% 0px 0px 0px' // top-r-b-L
            });

            cards.forEach(card => observer.observe(card));
            });
    }
    //Click search -> Loading data search byname
    let listTounament1 = document.querySelector('#listTournament1');
    listTounament1.addEventListener('click', loadDataSearch);

    //Loading data search by country
    const loadDataSearchCountry = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //remove oldcard
                var oldCard = document.getElementsByClassName("card");
                while (oldCard.length > 0) {
                    oldCard[0].parentNode.removeChild(oldCard[0]);
                }

                let searchValue = document.querySelector('#search-input2').value.toLowerCase();
                let filteredData = data.tournaments.filter(item => item.country.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
                    let card = document.createElement('a');
                    card.classList.add('card', 'card3-res');
                    card.innerHTML = `
                                <div class="card-image">
                                <img src="./assets/images/${item.logo}" alt="${item.logo}">
                                </div>
                                <div class="card-img-overlay">
                                <h4 class="card-logo">${item.name}</h4>
                                <div class="card-content">
                                    <h5 class="card-content-title">Position ${item.country}</h5>
                                    <p class="card-content-des">Current team: ${item.country}</p>
                                </div>
                                </div>
                            `;
                    cardContainer.appendChild(card);
                });

                 //set animation in scroll
            const cards = document.querySelectorAll('.card');
            const observedElements = new Set();

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!observedElements.has(entry.target)) {
                            entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                            observedElements.add(entry.target);
                        }
                    } else {
                        observedElements.delete(entry.target);
                        entry.target.classList.remove('animate__animated', 'animate__fadeInDown');
                    }
                });
            }, {
                threshold: [0],
                rootMargin: '30% 0px 0px 0px' // top-r-b-L
            });

            cards.forEach(card => observer.observe(card));
            });
    }
    //Click search -> Loading data search
    let listTounament2 = document.querySelector('#listTournament2');
    listTounament2.addEventListener('click', loadDataSearchCountry);

};

// Click see all tournament -> load tournament
var navListTournament = document.getElementById("navListTournament");
navListTournament.addEventListener("click", loadTournament);




