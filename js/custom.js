
(function ($) {

  "use strict";


  // BACKSTRETCH SLIDESHOW
  $('.hero-section').backstretch([
    
    "images/slideshow/3d-model-residential-building.jpg",
    "images/slideshow/different-car-accessories-arrangement.jpg",
    "images/services/scene-construction-site-with-equipment.jpg"
  ], { duration: 5000, fade: 750 });


  // Add Observer for navbar scroll
    const callback = (entries, observer) => {
      const entry = entries[0];
      
      // toggle class depending on if content div intersects with viewport
      const navBar = $('.navbar')[0];
      navBar.classList.toggle('scrolled', !entry.isIntersecting);
    }
    
    // options controls circumstances under which the observer's callback is invoked
    const options = {
      // no root provided - by default browser viewport used to check target visibility
      // only detect if target element is fully visible or not
      threshold: [1]
    };
    
    const io = new IntersectionObserver(callback, options);
    
    // observe content div 
    let target = document.querySelector('.hero-section');
    if(target == null) {
      target = document.querySelector('.banner-section');
    }

    io.observe(target);

})(window.jQuery);


