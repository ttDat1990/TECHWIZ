
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

    var contactWrapper = document.getElementById("contactWrapper");
    contactWrapper.innerHTML = '';

    var contactWrapper = document.getElementById("contactWrapper");
    var contactGrid = document.createElement('div');
    contactGrid.classList.add('grid', 'animate__animated', 'animate__fadeInDown');
    contactGrid.id = 'contactGrid';
    contactGrid.innerHTML = ` 
                            <div class="list-title animate__animated animate__fadeInLeft animate__delay-1s">Contact us</div>                                   
                            <div class="contact-container animate__animated animate__fadeInDown animate__delay-1s">
                                <div class="parag-1">
                                    <p>
                                        Thank you for visiting our website! We are dedicated to providing the latest updates and information on soccer matches, players, and teams. If you have any questions or comments, please feel free to contact us using the form below.
                                    </p>
                                </div>
                                <div class="parag-1">
                                    <h2>Connect with Us</h2>
                                    <p>
                                    You can also connect with us on social media to stay up-to-date with the latest soccer news and updates.
                                    </p>
                                    <ul>
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                    </ul>
                                </div>
                                <div class="parag-1">
                                    <h2>Subscribe to Our Newsletter</h2>
                                    <p>
                                        Don’t miss out on the latest soccer news and updates! Subscribe to our newsletter to receive regular updates on matches, players, and teams.
                                    </p>
                                    <a href="">Subscribe</a>
                                    <p>Thank you for your interest in our website. We look forward to hearing from you!</p>
                                </div>
                            </div>                                                              
                            `;
    contactWrapper.appendChild(contactGrid);
};
var contactPage = document.getElementById("contactUs");
contactPage.addEventListener("click", loadContact);