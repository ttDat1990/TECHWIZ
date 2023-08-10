//first load scrollDown
var loadTournament = function (event) {
    event.preventDefault();

    var slider = document.getElementById("slider");
    if(slider) slider.remove();
    
    var scrollDown = document.getElementById("scrollDown");
    if(scrollDown) scrollDown.remove();

    var cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = '';

    var matchWrapper = document.getElementById("matchWrapper");
    matchWrapper.innerHTML = '';

    let cardTournamentWrapper = document.querySelector('#cardWrapper');
    var tournamentContainer = document.createElement('div');
    tournamentContainer.className = 'tournament-container';
    tournamentContainer.id = 'tournament-container';
    tournamentContainer.innerHTML = `                                    
                            <div class="grid">
                                <div class="list-title-wrapper">
                                    <div class="list-title">
                                        Best Player
                                    </div>
                                    <div class="search-input-wrapper" style="flex: 0;">
                                        <input class="search-input" id="search-input1" type="text" placeholder="Search tounaments by name">
                                        <button class="search-button" id="listTounament1">Search</button>
                                    </div>
                                </div>
                                <div class="card-container" id="card-container">
                                </div>   
                            </div>                                                              
                            `;
    cardTournamentWrapper.appendChild(tournamentContainer);

    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {

            data.tournaments.forEach(item => {
                let card = document.createElement('a');
                card.className = 'card';
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
        });

    //Loading data search
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
                    card.className = 'card';
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
            });
    }
    //Click search -> Loading data search
    let listTounament1 = document.querySelector('#listTounament1');
    listTounament1.addEventListener('click', loadDataSearch);

};

// Click see all tournament -> load tournament
var navListTournament = document.getElementById("navListTournament");
navListTournament.addEventListener("click", loadTournament);




