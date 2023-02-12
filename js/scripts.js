/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $(function () {

    // Binding an event handler to all anchors that contain
    // a hash (#), but not necessarily JUST a hash - like href="#"
    // which is typically used in JS...

    $(".menu li a[href^='#'], .scroll-btn a[href^='#'], .menu li a[href='\\/blog']").click(function () {

      // Two conditional checks
      // First:
      // location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      // What we're doing is replacing the first forward slash (/) in the pathname
      // for the current location and comparing it to the link that's been clicked.
      // So http://personalsite.com/test/link/src, which normally would have
      // a pathname of /test/link/src would be test/link/src

      // The or check (||) is to see if the link matches the current domain
      // location.hostname == this.hostname

      // Basically, we want an internal anchor for the page we're on.

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        // Assigning the variable target, with the hash of the link that's been clicked
        // which is conveniently enough, a jquery selector for IDs (i.e. #hash)
        let target = $(this.hash);

        // We check the target length - basically, does the element exist?
        // If length equals to 0, we query the DOM by name attribute. Otherwise, we just re-assign target to self.
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // The rest is self explanatory... (animation  using the target's offset)
        // The return false prevents default behavior

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  let navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form");
  // let button = document.getElementById("my-form-button");
  let status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
    setTimeout(() => {
      status.classList.remove("success");
      status.innerHTML = "";
    }, 3500);
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Something went wrong, try again later!";
    setTimeout(() => {
      status.classList.remove("error");
      status.innerHTML = "";
    }, 3500);
  }

  function _error(message) {
    status.classList.add("error");
    status.innerHTML = message;
    setTimeout(() => {
      status.classList.remove("error");
      status.innerHTML = "";
    }, 3500);
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {

    ev.preventDefault();
    const API_KEY = '4a139d8384fa40bb877b70b48a487444';
    const API_DOMAIN = `https://emailvalidation.abstractapi.com/v1/`;

    let form_data = new FormData(form);
    const email = form_data.get('Email');

    const API_URI = `${API_DOMAIN}?api_key=${API_KEY}&email=${email}`;

    let email_splitted = email.split('@');
    let bool_match = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (email_splitted.length != 2 || email_splitted[0].length > 28 || !bool_match) {
      _error("Something went wrong, try again later!");
    }
    else {
      fetch(API_URI, {
        method: 'get'
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then(function (data) {
          if (data['is_valid_format']['value'] && data['is_smtp_valid']['value']) {
            ajax(form.method, form.action, form_data, success, error);
          }
          else {
            _error(message = "Something went wrong, try again later!");
          }
        })
        .catch(function (err) {
          _error(message = "Something went wrong, try again later!");
        });
    }
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

$(document).ready(function () {
  let $animation_elements = $('.anim');
  let $window = $(window);

  function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
      let $element = $(this);
      let element_height = $element.outerHeight();
      let element_top_position = $element.offset().top;
      let element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('animated');
      } else {
        $element.removeClass('animated');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});

window.addEventListener('load', () => {
  registerSW();
});

// Register the Service Worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator
        .serviceWorker
        .register('serviceworker.js');
    }
    catch (e) {
      console.log('SW registration failed');
    }
  }
}

// Toggler code for switching light theme to dark theme and vice-versa
document.getElementById('toggling-switch').onclick = function () {
  let elementsToBeToggled = document.getElementsByClassName("toggle-switch-element");
  for (let i = 0; i < elementsToBeToggled.length; i++) {
    elementsToBeToggled[i].classList.toggle('light-theme');
  }
}
