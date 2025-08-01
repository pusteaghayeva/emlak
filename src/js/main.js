
//  search 
  document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.querySelector('.search-toggle');
        const inputBox = document.querySelector('.search-expand');

        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            inputBox.classList.toggle('active');

            if (inputBox.classList.contains('active')) {
                inputBox.focus();
            }
        });
    });
// search end

// usefull links icon change
const usefullItems = document.querySelectorAll('.usefull-item');
usefullItems.forEach(function (usefullItem) {
    usefullItem.addEventListener('mouseover', function () {
        const logoImage = usefullItem.querySelector('.sq-logo');
        logoImage.src = './src/img/flhover.png';
    });

    usefullItem.addEventListener('mouseout', function () {
        const logoImage = usefullItem.querySelector('.sq-logo');
        logoImage.src = './src/img/fl.png';
    });
});


$(document).ready(() => {

    function AddZero(num) {
        return num >= 0 && num < 10 ? "0" + num : num + "";
    }

    function getTime() {
        var now = new Date();
        var strDateTime = [
            [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),
        ];
        document.getElementById("time").innerHTML = strDateTime;
    }

    getTime();

    setInterval(() => {
        getTime();
    }, 1000);

    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled
            ? backToTop.fadeIn('fast')
            : backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })
})



  $(document).ready(function(){
    $('#news-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: ["", ""],
      responsive:{
        0: {
                items: 1 
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5 
            },
            1200: {
                items: 6
            },
             1400: {
                items: 6
            }
      }
    });
  });

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    loop: true, // lazım olsa true et
    margin: 16,
    nav: true,
  navText: [
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  fill="#306279" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path  fill="#306279" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  });

  $("#owl-demo-2").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    // navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });
});


// single news

$(document).ready(function () {
    $("#news-slider4").owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });

    // Əgər başqa owl-lar da varsa, onları da burada qeyd et
    $("#owl-demo-3").owlCarousel({
        items: 2,
        margin: 10,
        nav: true,
        navText: ["", ""],
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            980: { items: 1 },
            1199: { items: 2 }
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: ["zoom", "close"],
        loop: true,
        transitionEffect: "zoom"
    });
});




// son
jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: false, 
  margin: 0,
  loop: true,
   
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',

 responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 10000,
  smartSpeed: 2500,
  nav: true,
  navText: [
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  fill="#306279" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path  fill="#306279" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  buttons: ["zoom", "slideShow", "thumbs", "close"],
  afterClose: function(instance, current) {
    // Məsələn, owl carousel refresh (əgər istifadə edirsənsə)
    $('#carousel').trigger('refresh.owl.carousel');
  }
});
$('[data-fancybox="gallery"]').on('afterClose.fb', function() {
  $('.fancybox-slide').css({
    'transform': '',
    'width': ''
  });
});




/* Please ❤ this if you like it! */



(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

// map
// weather
$(document).ready(() => {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nakhchivan&appid=58043dfa5bd5e54381af772954cd1ded&units=metric";

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Məlumat alına bilmədi');
            }
            return response.json();
        })
        .then(data => {
            function getWeatherIcon(iconCode) {
                const iconMap = {
                    '01d': 'fa-sun',
                    '01n': 'fa-moon',
                    '02d': 'fa-cloud-sun',
                    '02n': 'fa-cloud-moon',
                    '03d': 'fa-cloud',
                    '03n': 'fa-cloud',
                    '04d': 'fa-cloud',
                    '04n': 'fa-cloud',
                    '09d': 'fa-cloud-showers-heavy',
                    '09n': 'fa-cloud-showers-heavy',
                    '10d': 'fa-cloud-sun-rain',
                    '10n': 'fa-cloud-moon-rain',
                    '11d': 'fa-bolt',
                    '11n': 'fa-bolt',
                    '13d': 'fa-snowflake',
                    '13n': 'fa-snowflake',
                    '50d': 'fa-smog',
                    '50n': 'fa-smog'
                };
                return iconMap[iconCode] || 'fa-cloud';
            }

            const iconCode = data.weather[0].icon;
            const weatherIcon = getWeatherIcon(iconCode);
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            // Icon class təyin et
            document.getElementById('weather-icon').className = `fa-solid ${weatherIcon}`;

            // Temperaturu yaz
            document.getElementById('weather').textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('Xəta:', error);
        });
});
