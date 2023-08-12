window.onload = function () {
    //first load listPlayer
    let cardContainer = document.querySelector('#player-container');
    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.id = 'grid1';
    grid.innerHTML = `                                    
                        <div class="list-title-wrapper">
                            <div class="list-title">
                                Best Player
                            </div>
                            <div class="search-input-wrapper" style="flex: 0;">
                                <button class="search-button" id="listPlayer">Find all Player</button>
                            </div>
                        </div>
                        <div class="card-container" id="card-container">
                        </div>                                                                 
                        `;
    cardContainer.appendChild(grid);


    //first load listTournament
    let tournamentContainer = document.querySelector('#tournament-container');
    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.id = 'grid1';
    grid.innerHTML = `                                    
                        <div class="list-title-wrapper">
                            <div class="list-title">
                                Tournaments
                            </div>
                            <div class="search-input-wrapper" style="flex: 0;">
                                <button class="search-button" id="listTournament">Find all Tounament</button>
                            </div>
                        </div>
                        <div class="card-container" id="card-container1">
                        </div>                                                                 
                        `;
    tournamentContainer.appendChild(grid);

    //first load listClubs
    let clubContainer = document.querySelector('#club-container');
    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.id = 'grid1';
    grid.innerHTML = `                                    
                        <div class="list-title-wrapper">
                            <div class="list-title">
                                Top 10 Scores
                            </div>
                            <div class="search-input-wrapper" style="flex: 0;">
                                
                            </div>
                        </div>
                        <div class="card-container" id="card-container2">
                        </div>                                                                 
                        `;
    clubContainer.appendChild(grid);

    //first load match-result
    let matchWrapper = document.querySelector('#matchWrapper');
    var matchResult = document.createElement('div');
    matchResult.className = 'match-result';
    matchResult.id = 'matchResult';
    matchResult.innerHTML = `                                    
                        <div class="match-title">
                        All Live Score Today
                        </div>                                                         
                        `;
    matchWrapper.appendChild(matchResult);

    //first load match-schedule
    var matchSchedule = document.createElement('div');
    matchSchedule.className = 'match-schedule';
    matchSchedule.id = 'matchSchedule';
    matchSchedule.innerHTML = `                                    
                        <div class="match-title">
                        All Best Match Schedule
                        </div>                                                         
                        `;
    matchWrapper.appendChild(matchSchedule);

    //Load data
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            //data player
            data.players.forEach((item, i) => {
                if (i < 5) {
                    let allCard = document.createElement('div');
                    let card = document.createElement('a');
                    card.classList.add('card', 'card5');
                    card.innerHTML = `                                                                                                            
                                <div class="card-image">
                                    <img src="./assets/images/${item.image}" alt="${item.image}">
                                    </div>
                                    <div class="card-img-overlay">
                                    <h4 class="card-logo">${item.name}</h4>
                                    <div class="card-content">
                                        <h5 class="card-content-title">${item.position}</h5>
                                        
                                    </div>
                                </div>                                                                                                        
                                    `;
                    let cardContainer1 = document.querySelector('#card-container');
                    cardContainer1.appendChild(card);
                }
            });
            //data tournaments
            data.tournaments.forEach((item, i) => {
                if (i < 5) {
                    let allCard = document.createElement('div');
                    let card = document.createElement('a');
                    card.classList.add('card', 'cardWide');
                    card.innerHTML = `                                                                                                            
                                    <div class="card-image">
                                        <img src="./assets/images/${item.logo}" alt="${item.logo}">
                                        </div>
                                        <div class="card-img-overlay">
                                        <h4 class="card-logo">${item.name}</h4>
                                        <div class="card-content">
                                            <h5 class="card-content-title">${item.country}</h5>
                                            <p class="card-content-des">${item.content}</p>
                                        </div>
                                    </div>                                                                                                        
                                        `;
                    let cardContainer1 = document.querySelector('#card-container1');
                    cardContainer1.appendChild(card);
                }
            });
            //data clubs
            data.clubs.forEach((item, i) => {
                if (i < 10) {
                    let allCard = document.createElement('div');
                    let card = document.createElement('a');
                    card.classList.add('card', 'card5');
                    card.innerHTML = `                                                                                                            
                                    <div class="card-image">
                                        <img src="./assets/images/${item.image}" alt="${item.image}">
                                        </div>
                                        <div class="card-img-overlay">
                                        <h4 class="card-logo">${item.name}</h4>
                                        <div class="card-content">
                                            <h5 class="card-content-title">${item.country}</h5>
                                            <p class="card-content-des"></p>
                                        </div>
                                    </div>                                                                                                        
                                    `;
                    let cardContainer1 = document.querySelector('#card-container2');
                    cardContainer1.appendChild(card);
                }
            });
            //data matches-result
            data.matches.forEach((item, i) => {
                if (i < 5) {
                    let matchItem = document.createElement('div');
                    matchItem.className = 'match-item';
                    matchItem.innerHTML = `                                                                                                            
                                <div class="match-time">
                                ${item.time}
                                </div>
                                <div class="all-team">
                                    <div class="team1">
                                        <div class="team-name1">
                                        ${item.team1}
                                        </div>
                                        <div class="team-logo">
                                            <img src="./assets/images/${item.logo1}" alt="arsenal.png">
                                        </div>
                                        <div class="team-score">
                                        ${item.score1}
                                        </div>
                                    </div>
                                    <div class="team2">
                                        <div class="team-score">
                                        ${item.score2}
                                        </div>
                                        <div class="team-logo">
                                            <img src="./assets/images/${item.logo2}" alt="barcelona2.png">
                                        </div>
                                        <div class="team-name2">
                                        ${item.team2}
                                        </div>    
                                    </div>            
                                </div>                                                                                      
                                `;
                    let cardContainer1 = document.querySelector('#matchResult');
                    cardContainer1.appendChild(matchItem);
                }
            });
            //data matches-shedule
            data.matches.forEach((item, i) => {
                if (i >= 5 && i < 10) {
                    let matchItem = document.createElement('div');
                    matchItem.className = 'match-item';
                    matchItem.innerHTML = `                                                                                                            
                                    <div class="match-time">
                                    ${item.time}
                                    </div>
                                    <div class="all-team">
                                        <div class="team1">
                                            <div class="team-name1">
                                            ${item.team1}
                                            </div>
                                            <div class="team-logo">
                                                <img src="./assets/images/${item.logo1}" alt="arsenal.png">
                                            </div>
                                            <div class="team-score">
                                            ${item.score1}
                                            </div>
                                        </div>
                                        <div class="team2">
                                            <div class="team-score">
                                            ${item.score2}
                                            </div>
                                            <div class="team-logo">
                                                <img src="./assets/images/${item.logo2}" alt="barcelona2.png">
                                            </div>
                                            <div class="team-name2">
                                            ${item.team2}
                                            </div>    
                                        </div>            
                                    </div>                                                                                      
                                    `;
                    let cardContainer1 = document.querySelector('#matchSchedule');
                    cardContainer1.appendChild(matchItem);
                }
            });

             //set animation in scroll
             const matchItem = document.querySelectorAll('.match-item');
             const matchTitle = document.querySelectorAll('.match-title');
             const observedElements = new Set();
 
             const observer = new IntersectionObserver(entries => {
                 entries.forEach(entry => {
                     if (entry.isIntersecting) {
                         if (!observedElements.has(entry.target)) {
                             entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                             observedElements.add(entry.target);
                         }
                     } else {
                         observedElements.delete(entry.target);
                         entry.target.classList.remove('animate__animated', 'animate__fadeInRight');
                     }
                 });
             }, {
                 threshold: [0],
                 rootMargin: '30% 0px 0px 0px' // top-r-b-L
             });
 
             matchItem.forEach(matchItem => observer.observe(matchItem));

             //set animation in scroll list-title-wrapper
            const cards = document.querySelectorAll('.card');
            const listTitleWrapper = document.querySelectorAll('.list-title-wrapper');
            const observedElements1 = new Set();

            const observer1 = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!observedElements1.has(entry.target)) {
                            entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                            observedElements1.add(entry.target);
                        }
                    } else {
                        observedElements1.delete(entry.target);
                        entry.target.classList.remove('animate__animated', 'animate__fadeInDown');
                    }
                });
            }, {
                threshold: [0],
                rootMargin: '30% 0px 0px 0px' // top-r-b-L
            });

            cards.forEach(card => observer1.observe(card));
            listTitleWrapper.forEach(listTitleWrapper => observer1.observe(listTitleWrapper));
        });

    // Click find all player -> load player
    var listPlayer = document.getElementById("listPlayer");
    listPlayer.addEventListener("click", loadPlayer);

    // Click find all Tournament -> load Tournament
    var listTournament = document.getElementById("listTournament");
    listTournament.addEventListener("click", loadTournament);

};


