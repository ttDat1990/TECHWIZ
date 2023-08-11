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

    var contactGrid = document.createElement('div');
    contactGrid.className = 'grid';
    contactGrid.id = 'contactGrid';
    contactGrid.innerHTML = `                                    
                            <div class="contact-container">
                                <div class="parag-1">
                                    <h2>Contact Us</h2>
                                    <p>
                                        Thank you for visiting our website! We are dedicated to providing the latest updates and information on soccer matches, players, and teams. If you have any questions or comments, please feel free to contact us using the form below.
                                    </p>
                                </div>
                                <div class="parag-2">
                                    <h2>Get in Touch</h2>
                                    <p>
                                        Thank you for visiting our website! We are dedicated to providing the latest updates and information on soccer matches, players, and teams. If you have any questions or comments, please feel free to contact us using the form below.
                                    </p>
                                </div>
                            </div>                                                              
                            `;
    cardContainer.appendChild(playerContainer);

    
};
