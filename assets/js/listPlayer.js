//first load matchWrapper
var loadPlayer = function (event) {
    event.preventDefault();

    var slider = document.getElementById("slider");
    if(slider) slider.remove();
    
    var scrollDown = document.getElementById("scrollDown");
    if(scrollDown) scrollDown.remove();

    var cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = '';

    var matchWrapper = document.getElementById("matchWrapper");
    matchWrapper.innerHTML = '';

    let cardContainer = document.querySelector('#cardWrapper');
    var playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';
    playerContainer.id = 'player-container';
    playerContainer.innerHTML = `                                    
                            <div class="grid">
                                <div class="list-title-wrapper">
                                    <div class="list-title">
                                        Best Player
                                    </div>
                                    <div class="search-input-wrapper" style="flex: 0;">
                                        <input class="search-input" id="search-input1" type="text" placeholder="Search player by name">
                                        <button class="search-button" id="listPlayer1">Search</button>
                                    </div>
                                </div>
                                <div class="card-container" id="card-container">
                                </div>   
                            </div>                                                              
                            `;
    cardContainer.appendChild(playerContainer);

    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {

            data.players.forEach(item => {
                let card = document.createElement('a');
                card.className = 'card';
                card.innerHTML = `                                                                                                            
                                <div class="card-image">
                                    <img src="./assets/images/${item.image}" alt="${item.image}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">Position ${item.position}</h5>
                                        <p class="card-content-des">Current team: ${item.club}</p>
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
                let filteredData = data.players.filter(item => item.name.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
                    let card = document.createElement('a');
                    card.className ='card';
                    card.innerHTML = `
                                    <div class="card-image">
                                    <img src="./assets/images/${item.image}" alt="${item.image}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">Position ${item.position}</h5>
                                        <p class="card-content-des">Current team: ${item.club}</p>
                                    </div>
                                    </div>
                                `;
                    cardContainer.appendChild(card);
                });
            });
    }
    //Click search -> Loading data search
    let searchButton2 = document.querySelector('#listPlayer1');
    searchButton2.addEventListener('click', loadDataSearch);

};

// Click Player Galleries -> load player
var navListPlayer = document.getElementById("navListPlayer");
navListPlayer.addEventListener("click", loadPlayer);



