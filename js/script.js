/**************************************************   Start Settings box  **********************************************************/

/* Check if There'sLocal Storage Color Option */
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    /* Set Color On Local Storage */
    document.documentElement.style.setProperty("--main-color", mainColors);

     /* Remove Active Class From All Colors List Item */
     document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        /* Qdd Active Class On Element with Data-color === Local Storage Item */
        if (element.dataset.color === mainColors) {
            /* Add active Class */
            element.classList.add("active");
        }

    });
}


/* Random background Option */
let backgroundOption = true;

/* Variable To Control The background Interval */
let backgroundInterval;

/* Check If There's Local Storage Random Background Item */
let backgroundLocalItem = localStorage.getItem("background_option");

/* Check If Random Background Local Storage Is Not Empty */
if (backgroundLocalItem !== null) {
    
    if (backgroundLocalItem === "true") {
        
        backgroundOption = true;

    } else {

        backgroundOption = false;

    }

    /* Remove Active Class From All Spans */
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {
       
        document.querySelector(".random-backgrounds .yes").classList.add("active");
        
    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");

    }

}

/* Toggle Spin Class On Icon */
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    /* Toggle Class Fa-spin for rotation on self */
    this.classList.toggle("fa-spin");

    /* Tggle Class Open on main Settings box */
    document.querySelector(".settings-box").classList.toggle("open");

};

/* Switch Colors */
const colorsLi = document.querySelectorAll(".colors-list li");

/* Loop On All List Item */
colorsLi.forEach(li => {

    /* Click on every list Items */
    li.addEventListener("click", (e) => {

        /* Set Color On Root */
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        /* Set Color On Local Storage */
        localStorage.getItem("color_option", e.target.dataset.color)

        handleActive(e);

    });

});


/* Switch Random background option */
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

/* Loop On All spans */
randomBackEl.forEach(span => {

    /* Click on every spans */
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === "yes") {
            
            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }

    });

});

/**************************************************   Start Settings box  **********************************************************/

/*************************************** landing page background image change automatique *****************************************/

/* Select landing page element */
let landingPage = document.querySelector('.landing-page');

/* Get Array of Imgs */
let imgsArray = ["head1.jpg", "head2.jpg", "head3.jpg", "head4.jpg", "head5.jpg"]

/* Function To Randomize Imgs */
function randomizeImgs() {

    if (backgroundOption === true) {
        
        backgroundInterval = setInterval(() => {

            /* Get Random Number */
             let randomNumber = Math.floor(Math.random() * imgsArray.length); 
            
            /* change background-img Url */
             landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] +'")'; 
            
             }, 10000) 

    }

}
randomizeImgs()
/*************************************** landing page background image change automatique *****************************************/

/********************************************** skilss scroll animation ***********************************************************/

/* Select Skills Selector */
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    /* skills Offset Top */
    let skillsOffsetTop = ourSkills.offsetTop;

    /* Outer height skills */
    let skillsOuterHeight = ourSkills.offsetHeight;

    /* Window Height */
    let windowHeight = this.innerHeight;

    /* window scroll Top */
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skills => {
            skills.style.width = skills.dataset.progress;
        })
    }

}

/************************************************************ skilss **************************************************************/

/************************************************************ Galery *************************************************************/

/* Create Popup With The image */
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    
    img.addEventListener('click', (e) => {

        /* Creat Overlay Element */
        let overlay = document.createElement("div");

        /* Add Class To Overlay */
        overlay.className = "popup-overlay";

        /* Append overlay to the body */
        document.body.appendChild(overlay);

        /* Create the popup box */
        let popupBox = document.createElement("div");

        /* Add Class To the Popup Box */
        popupBox.className = "popup-box";

        if (img.alt !== null) {
            
            /* Create heading */
            let imgHeading = document.createElement("h3");

            /* Create text for heading */
            let imgText = document.createTextNode(img.alt);

            /* Append the text to the heading */
            imgHeading.appendChild(imgText);

            /* Append the Heading to the popup box */
            popupBox.appendChild(imgHeading);
        }

        /* Create the image */
        let popupImage = document.createElement("img");

        /* Set Image source */
        popupImage.src = img.src;

        /* Add Image To Popup Box */
        popupBox.appendChild(popupImage);

        /* Append the popup box to body */
        document.body.appendChild(popupBox);

        /* Create close span */
        let closeButton = document.createElement("span");

        /* Create the close button text */
        let closeButtonText = document.createTextNode("X");

        /* Append Text To close button */
        closeButton.appendChild(closeButtonText);

        /* Add class to close button */
        closeButton.className = "close-button";

        /* Add close button to the popup box */
        popupBox.appendChild(closeButton);
    })

})

/* Close popup */
document.addEventListener("click", function(e) {

    if (e.target.className == 'close-button') {
        
        /* Remove the current popup */
        e.target.parentNode.remove();

        /* Remove overlay */
        document.querySelector(".popup-overlay").remove();

    }

})

/************************************************************ Galery *************************************************************/

/************************************************************ navigation bar *****************************************************/

/* Select All Bullets */
const allBullets = document.querySelectorAll(".nav-bullets .bullet")

allBullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        })
    })
}) 

/* Select All links */
const allLinks = document.querySelectorAll(".links a")

allLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        })
    })
}) 

/* function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            })
        })
    })
}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);  */
/************************************************************ navigation bar *****************************************************/

/* Handle Active State */
function handleActive(ev) {
    /* Remove Active Class From All childrens */
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    /* Add active Class On self */
    ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    
    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {
        
        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {
        
        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');
        }

        handleActive(e);
    })
})


/* Reset button */

document.querySelector(".reset-option").onclick = function () {

    localStorage.clear(); 
    
    /* localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option"); */

    window.location.reload();
}

/* Toggle Menu */

let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};

/* click anywhere outside menu toggle */
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn & e.target !== tLinks) {
        
        if(tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");
        }

    }
})

/* stop propagation on menu */
tLinks.onclick = function (e) {
    e.stopPropagation();
}