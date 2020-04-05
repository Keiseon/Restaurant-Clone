// --------- METHOD SCOPE START------- GIVE METHODS SCOPE HERE
// %%%%%%%%%%%    PUB Map Start %%%%%%%%%%%%
const pubMapCtrl = () => {
  // Using the Google Map without that Api key thing lol
  const pubMap = () => {
    //Grab the container div that will hold the Iframe aka map
    const divContainer = document.querySelector("#map-content");
    // Create an Iframe
    const newIFrame = document.createElement("iframe");
    //add class name
    newIFrame.className = "mapFrame";
    // Iframe Dimensions
    // newIFrame.setAttribute("width", "496"); // frame width
    // newIFrame.setAttribute("height", "260"); // frame height
    newIFrame.setAttribute(
      "src",
      "https://www.google.com/maps/d/embed?mid=1qM4vlhotsIZAkdkJvm9eooWqxYUB5EKT"
    ); // embedded map link

    // Now insert my newIFrame into the Dom
    divContainer.appendChild(newIFrame);
  };

  // Add event listener
  const myMapTrigger = document.querySelector(".site-container");

  myMapTrigger.addEventListener("load", pubMap());
};

// %%%%%%%%%%%    PUB Map End %%%%%%%%%%%%

// %%%%%%%%%%%%     Hamburger menu Code Start   %%%%%%%%%%%%%

// if checkbox is checked then send the menu-wrap to foreground and the site-container and footer (Find-us and copyright) to the background
const toggleMenu = () => {
  // Grab the menu and the siteContainer to control their z-index
  const menuWrap = document.querySelector(".menu-wrap");
  const siteContainer = document.querySelector(".site-container");
  // pull the Map
  const footerMap = document.querySelector("#find-us");
  // pull the copyright data
  const footerCopyright = document.querySelector(".copyright");
  // Grab the checkbox value
  const checkBox = document.querySelector("#checkbox");

  if (checkBox.checked) {
    siteContainer.style.zIndex = 1; // push to back
    footerMap.style.zIndex = 0; // push to back
    footerCopyright.style.zIndex = 0; // push to back
    menuWrap.style.zIndex = 2; // pull to front
  } else {
    siteContainer.style.zIndex = 2; // pull to front
    footerMap.style.zIndex = 1; // pull to front
    footerCopyright.style.zIndex = 1; // pull to front
    menuWrap.style.zIndex = 1; // push to back
  }

  // Make click event for checkbox to set z-index of menu
  checkBox.addEventListener("click", toggleMenu);
};

// Reset the checkbox to be Unchecked
const checkBoxReset = () => {
  // Grab the checkbox value
  const checkBox = document.querySelector("#checkbox");
  // Reset it to send menu-wrap to the back and site-container to the front
  checkBox.checked = false;
};

// %%%%%%%%%%%%     Hamburger menu Code end   %%%%%%%%%%%%%

// %%%%%%%%%%%%     Button-Spin Code start   %%%%%%%%%%%%%

const buttonSpin = () => {
  // Add event Listeners for the buttons
  const expandBtn = document
    .querySelector(".fa-expand")
    .addEventListener("mouseover", () => {
      const theLink = document.querySelector(".fa-expand");
      theLink.classList.add("fa-spin");
      // reset the Button after a short delay
      setTimeout(function() {
        theLink.classList.remove("fa-spin");
      }, 500);
    });
  const compressBtn = document
    .querySelector(".fa-compress")
    .addEventListener("mouseover", () => {
      const theLink = document.querySelector(".fa-compress");
      theLink.classList.add("fa-spin");
      // reset the Button after a short delay
      setTimeout(function() {
        theLink.classList.remove("fa-spin");
      }, 500);
    });
  const closeBtn = document
    .querySelector(".fa-times")
    .addEventListener("mouseover", () => {
      const theLink = document.querySelector(".fa-times");
      theLink.classList.add("fa-spin");
      // reset the Button after a short delay
      setTimeout(function() {
        theLink.classList.remove("fa-spin");
      }, 500);
    });
};
// %%%%%%%%%%%%     Button-Spin Code end   %%%%%%%%%%%%%

// %%%%%%%%  Populate-Gallery-Showcase Code Start %%%%%%%%
const populateGallery = () => {
  const arrayContainer = document.querySelectorAll(".gallery-item-container");
  for (let i = 0; i < arrayContainer.length; i++) {
    console.log(arrayContainer[i].childNodes[i + 1]);
  }
  // console.log(arrayContainer[0].childNodes[1]);
};
// %%%%%%%%  Populate-Gallery-Showcase Code end %%%%%%%%

// %%%%%%%%  Maximize-Gallery-Showcase start %%%%%%%%
const maximizeG = () => {
  const maxShowcase = document.querySelector(".showcase-wrapper");
  const pbgLinks = document.querySelector(".pbg-links");
  const maximBtn = document.querySelector("#expand-btn");
  const compressBtn = document.querySelector("#compress-btn");
  const shareBtn = document.querySelector("#share-btn");
  const pbgDetails = document.querySelector(".pbg-details");
  const menuImgWrapper = document.querySelector(".menu-img");

  maximBtn.addEventListener("click", e => {
    maxOutImgWrapper();

    if (!IsFullScreenCurrently()) {
      GoInFullscreen(maxShowcase);
    }
  });

  compressBtn.addEventListener("click", e => {
    minImgWrapper();

    if (IsFullScreenCurrently()) {
      GoOutFullscreen();
    }
  });

  const maxOutImgWrapper = () => {
    pbgLinks.classList.add("invisible");
    maxShowcase.classList.add("maxShowcase");
    pbgDetails.classList.add("hideLink");
    maximBtn.classList.add("hideLink");
    compressBtn.classList.remove("hideLink");
    menuImgWrapper.classList.add("imgAdjustment");
  };
  const minImgWrapper = () => {
    pbgLinks.classList.remove("invisible");
    maxShowcase.classList.remove("maxShowcase");
    pbgDetails.classList.remove("hideLink");
    compressBtn.classList.add("hideLink");
    maximBtn.classList.remove("hideLink");
    menuImgWrapper.classList.remove("imgAdjustment");
  };

  // %%%%%%%%%%%%     Fullscreen Code Start   %%%%%%%%%%%%%

  // %%%%%%% Go into Fullscreen %%%%%%
  function GoInFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  }

  // %%%%%%%  Exiting Full-Screen   %%%%%%
  function GoOutFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }

  // %%%%  Returns the DOM Node of the element which is in full-screen
  // %%%%%   Returns null if no element in full-screen
  // function CurrentFullScreenElement() {
  // 	return (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null);
  // }

  // Check For Fullscreen mode
  function IsFullScreenCurrently() {
    var full_screen_element =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null;

    // If no element is in full-screen
    if (full_screen_element === null) return false;
    else return true;
  }

  // %%%%%%%%%%%%     Fullscreen Code end   %%%%%%%%%%%%%
};
// %%%%%%%%  Maximize-Gallery-Showcase end %%%%%%%%

// ^^^^^^^^^  Lightbox start ^^^^^^^^^
const lightboxCtrl = () => {
  // hold the lightbox container
  const lightboxContainer = document.querySelector(".lightbox");
  // hold the image src and alt
  const lightboxImage = document.querySelector(".lightbox-img");
  // get the counter
  const counter = document.querySelector(".lightbox-counter");
  // grab the image title
  const lightboxText = document.querySelector(".lightbox-text");
  // grab the collection of image containers
  const portfolioItems = document.querySelector(".gallery-wrapper").children;
  // add next and prev buttons
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let index;
  let imgSrc;
  let imgAlt;
  let imgP;
  let img_h1;

  lightboxContainer.addEventListener("click", function(event) {
    if (
      event.target !== lightboxImage &&
      event.target !== next &&
      event.target !== prev
    ) {
      lightbox();
    }
  });

  // access each container index
  for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i]
      .querySelector(".text-overlay")
      .addEventListener("click", function() {
        index = i;
        changeImage();
        lightbox();
      });
  }

  lightboxImage.addEventListener("click", function() {
    if (index == portfolioItems.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeImage();
  });

  next.addEventListener("click", function() {
    if (index == portfolioItems.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeImage();
  });

  prev.addEventListener("click", function() {
    if (index == 0) {
      index = portfolioItems.length - 1;
    } else {
      index--;
    }
    changeImage();
  });

  function lightbox() {
    lightboxContainer.classList.toggle("open");
  }

  function changeImage() {
    imgSrc = portfolioItems[index].querySelector("img").getAttribute("src");
    imgAlt = portfolioItems[index].querySelector("img").getAttribute("alt");
    imgP = portfolioItems[index].querySelector("p").textContent.trim();
    img_h1 = portfolioItems[index].querySelector("h1").textContent.trim();

    let totn_string = imgSrc;
    totn_string = totn_string.replace(
      "./img/menu/320-W-x-480-H",
      "./img/menu/960-W-x-640-H"
    );

    console.log(
      totn_string.replace(
        "./img/menu/320-W-x-480-H",
        "./img/menu/960-W-x-640-H"
      ) +
        "original src " +
        imgSrc
    );

    lightboxImage.src = imgSrc;
    lightboxImage.alt = imgAlt;
    lightboxText.innerHTML = portfolioItems[index]
      .querySelector("h1")
      .innerHTML.trim();
    counter.innerHTML = ` ${index + 1} of ${portfolioItems.length}`;
  }
};
// ^^^^^^^^^  Lightbox end ^^^^^^^^^

// ----------- METHOD SCOPE END---------

// @@@@@@@@@@    Site Loader Control Start @@@@@@@@@@@@@
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
if (sPage == "index.html") {
  // %%%%%%%%%%%% Slideshow Code start  %%%%%%%%%%%%
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  const content = document.querySelectorAll(".content");
  const auto = true; // Set this true to auto run slide
  const intervalTime = 5000;
  let slideInterval;

  // Arrow function for Next
  // We need this method to control the slides
  const nextSlide = () => {
    // Get the current class
    const current = document.querySelector(".current");
    const slideRightAnime = document.querySelector(".slide-right-anime");

    // Remove the current class and Slide right anime
    current.classList.remove("current");
    slideRightAnime.classList.remove("slide-right-anime");

    //   Check for next slide
    if (current.nextElementSibling.classList.contains("slide")) {
      //Add the ".current" class to the next slide sibling
      current.nextElementSibling.classList.add("current");
      current.nextElementSibling.firstElementChild.classList.add(
        "slide-right-anime"
      );
    } else {
      // when you reach the end of the list of slides add the ".current" class back to the start
      slides[0].classList.add("current");
      content[0].classList.add("slide-right-anime");
    }

    //Delay then Remove the current class again
    setTimeout(() => current.classList.remove("current"));
  };

  // Arrow function for Prev
  // We need this method to control the slides
  const prevSlide = () => {
    // Get the current class
    const current = document.querySelector(".current");
    const slideRightAnime = document.querySelector(".slide-right-anime");

    if (current.previousElementSibling) {
      // Remove the current class and the slide right anime
      current.classList.remove("current");
      slideRightAnime.classList.remove("slide-right-anime");

      //   Check for Previous slide
      if (current.previousElementSibling.classList.contains("slide")) {
        //Add the ".current & .slide-right-anime" classes to the Previous slide sibling
        current.previousElementSibling.classList.add("current");
        current.previousElementSibling.firstElementChild.classList.add(
          "slide-right-anime"
        );
      }
    } else {
      // when you reach the beginning of the list of slides add the ".current" class back to the end sibling
      slides[slides.length - 1].classList.add("current");
      content[content.length - 1].classList.add("slide-right-anime");
    }

    //Delay then Remove the current class again
    setTimeout(() => current.classList.remove("current"));
    setTimeout(() => slideRightAnime.classList.remove("slide-right-anime"));
  };

  // Button Events that call your functions
  next.addEventListener("click", e => {
    nextSlide();
    autoSlide();
  });

  prev.addEventListener("click", e => {
    prevSlide();
    autoSlide();
  });

  // Setup Auto Slide Feature
  const autoSlide = () => {
    if (auto) {
      //   Clear the interval
      clearInterval(slideInterval);
      // Run the Next Slide at interval Time
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  };

  // Run slideshow automatically
  autoSlide();

  // %%%%%%%%%%%%     Slideshow Code end   %%%%%%%%%%%%%

  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
} else if (sPage == "about.html") {
  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
} else if (sPage == "events.html") {
  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
} else if (sPage == "gallery.html") {
  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
  // grab image container
  lightboxCtrl();
  // grab_GSI();
} else if (sPage == "menu.html") {
  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
} else if (sPage == "order.html") {
  // Set the Map
  pubMapCtrl();
  // Reset the checkbox to default value
  checkBoxReset();
  // Re-stack the site siblings so the menu goes to the back
  toggleMenu();
} else if (sPage == "Pub.html") {
  // Show in Fullscreen Mode
  maximizeG();
  // Animate Buttons
  buttonSpin();
}

//@@@@@@@@@@@@   Site Loader Control End @@@@@@@@@@@@

/*

JUST IN CASE I DECIDE TO USE THE API KEY SOMEDAY LOL (^_^)
------------------------------------------------------------------------

function initMap() {
  // Create Map params / options
  var options = {
    // the default display level in google maps is 8. NB: 8 & < zooms out and 8 & > zooms in lol
    zoom: 10,

    // latitude and longitude of Tobago (dont forget the "-" for the lng)
    center: { lat: 11.2337, lng: -60.6989 }
  };

  // create the map with the params we set. This pulls the options and the map div we made earlier
  var map = new google.maps.Map(
    document.querySelector("#map-content"),
    options
  );

  // Add Multiple markers

  // Make a Marker Array with coordinates iconImages and content
  var markers = [
    {
      coords: { lat: 11.267, lng: -60.7 },
      iconImage: "./img/025-ico-paragliding.png"
      // content: "<h2>~ Mount Dillon ~</h2>"
    },

    {
      coords: { lat: 11.1565, lng: -60.8402 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
      // content: null //"<h2>~ Store Bay ~</h2>"
    },

    {
      coords: { lat: 11.1799, lng: -60.7592 },
      // content: "<h2>~ Signal Hill ~</h2>",
      iconImage: "./img/014-ico-mountain.png"
    }
  ];

  // Call the addMarker function effectively
  // Loop through the markers Array
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  */

/*--------------------------------------------------------------- */
/*
  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords, // where you want the marker?
      map: map // where is the map that the marker must go on?

      // icon: props.iconImage // Set the icon image
    });

    // Check for the custom Icon
    if (props.iconImage) {
      // Set the icon image
      marker.setIcon(props.iconImage);
    }
  }
}
*/
