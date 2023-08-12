
var loadFeedback = function (event) {
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

    var contactWrapper = document.getElementById("contactWrapper");
    var contactGrid = document.createElement('div');
    contactGrid.classList.add('grid', 'animate__animated', 'animate__fadeInDown');
    contactGrid.id = 'contactGrid';
    contactGrid.innerHTML = ` 
                            <div class="list-title animate__animated animate__fadeInLeft animate__delay-1s">Feedback</div>                                   
                            <div class="contact-container animate__animated animate__fadeInDown animate__delay-1s">
                                <div class="parag-1">
                                    <p>
                                    Thank you for visiting our website! We are dedicated to providing the latest updates and information on soccer matches, players, and teams. We value your feedback and would love to hear your thoughts on our website and content.
                                    </p>
                                </div>
                                <div class="parag-1">
                                    <h2>Share Your Feedback</h2>
                                    <p>
                                    Please use the form below to share your feedback with us. We appreciate your comments and suggestions and will do our best to improve our website based on your input.
                                    </p>
                                    <ul class="form-feedback">
                                        <li class="fback-item">
                                            <div>Email </div>
                                            <div><input type="text" class="fback-input" /></div>
                                        </li>
                                        <li class="fback-item">
                                            <div>Content </div>
                                            <div><textarea rows="7" cols="50" class="fback-input"></textarea></div>
                                        </li>
                                        <div><a>Send</a></div>
                                    </ul>
                                </div>
                                
                            </div>                                                              
                            `;
    contactWrapper.appendChild(contactGrid);
};
var feedBack = document.getElementById("feedBack");
feedBack.addEventListener("click", loadFeedback);