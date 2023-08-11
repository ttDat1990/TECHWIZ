//first load 
var loadContact = function (event) {
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

    
};
