//first load 
var loadPlayer = function (event) {
    event.preventDefault();

    var slider = document.getElementById("slider");
    if (slider) slider.remove();

    var scrollDown = document.getElementById("scrollDown");
    if (scrollDown) scrollDown.remove();

    var cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = '';

    var matchWrapper = document.getElementById("matchWrapper");
    matchWrapper.innerHTML = '';

    let cardContainer = document.querySelector('#cardWrapper');
    cardContainer.className = 'padding100';
    var playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';
    playerContainer.id = 'player-container';
    playerContainer.innerHTML = `                                    
                            <div class="grid">
                                <div class="list-title-wrapper">
                                    <div class="list-title">
                                        Best Player
                                    </div>
                                    <div class="nav-item dropdown dropdown-find-player">
                                        <div class="nav-link">Search</div>
                                        <div class="dropdown-menu dropdown-search">
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input" id="search-input1" type="text" placeholder="Search player by name">
                                                <button class="search-button" id="listPlayer1">Search</button>
                                            </div>
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input" id="search-input2" type="text" placeholder="Search player by nationality">
                                                <button class="search-button" id="listPlayer2">Search</button>
                                            </div>
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input" id="search-input3" type="text" placeholder="Search player by club">
                                                <button class="search-button" id="listPlayer3">Search</button>
                                            </div>
                                            <div class="search-input-wrapper" style="flex: 0;">                                       
                                                <input class="search-input" id="search-input4" type="text" placeholder="Search player by position">
                                                <button class="search-button" id="listPlayer4">Search</button>
                                            </div>
                                        </div>
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
                card.classList.add('card','card3-res');
                card.innerHTML = `                                                                                                            
                                <div class="card-image">
                                    <img src="./assets/images/${item.image}" alt="${item.image}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">${item.position}</h5>
                                        <p class="card-content-des">${item.club}</p>
                                    </div>
                                </div>                                                                                                        
                                    `;
                let cardContainer1 = document.querySelector('#card-container');
                cardContainer1.appendChild(card);
            });
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
                let filteredData = data.players.filter(item => item.name.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
                    let card = document.createElement('a');
                    card.classList.add('card','card3-res');
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

    //Loading data search by nationality
    const loadDataSearchNal = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //remove oldcard
                var oldCard = document.getElementsByClassName("card");
                while (oldCard.length > 0) {
                    oldCard[0].parentNode.removeChild(oldCard[0]);
                }

                let searchValue = document.querySelector('#search-input2').value.toLowerCase();
                let filteredData = data.players.filter(item => item.nationality.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
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
                    cardContainer.appendChild(card);
                });
            });
    }
    //Click search -> Loading data search
    let searchButton3 = document.querySelector('#listPlayer2');
    searchButton3.addEventListener('click', loadDataSearchNal);

    //Loading data search by club
    const loadDataSearchClub = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //remove oldcard
                var oldCard = document.getElementsByClassName("card");
                while (oldCard.length > 0) {
                    oldCard[0].parentNode.removeChild(oldCard[0]);
                }

                let searchValue = document.querySelector('#search-input3').value.toLowerCase();
                let filteredData = data.players.filter(item => item.club.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
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
                    cardContainer.appendChild(card);
                });
            });

    }
    //Click search -> Loading data search
    let searchButton4 = document.querySelector('#listPlayer3');
    searchButton4.addEventListener('click', loadDataSearchClub);


    //Loading data search by position
    const loadDataSearchPos = () => {
        fetch('./data/data.json')
            .then(response => response.json())
            .then(data => {
                //remove oldcard
                var oldCard = document.getElementsByClassName("card");
                while (oldCard.length > 0) {
                    oldCard[0].parentNode.removeChild(oldCard[0]);
                }

                let searchValue = document.querySelector('#search-input4').value.toLowerCase();
                let filteredData = data.players.filter(item => item.position.toLowerCase().includes(searchValue));
                let cardContainer = document.querySelector('#card-container');
                cardContainer.innerHTML = '';
                filteredData.forEach(item => {
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
                    cardContainer.appendChild(card);
                });
            });
    }
    //Click search -> Loading data search
    let searchButton5 = document.querySelector('#listPlayer4');
    searchButton5.addEventListener('click', loadDataSearchPos);
};

// Click Player Galleries -> load player
var navListPlayer = document.getElementById("navListPlayer");
navListPlayer.addEventListener("click", loadPlayer);

