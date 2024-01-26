(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });

    // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the content of the element with the current year
  document.getElementById("current-year").textContent = currentYear;

    // Function to initialize the portfolio filter
    function initializePortfolioFilter() {
        var portfolioFilters = $("#portfolio-flters li");

        // Filter function
        function filterPortfolioItems(filter) {
            $(".portfolio-item").fadeOut(300);

            if (filter == "*") {
                $(".portfolio-item").fadeIn(300);
            } else {
                $(filter).fadeIn(300);
            }
        }

        // Click event for portfolio filters
        portfolioFilters.on("click", function () {
            portfolioFilters.removeClass("active");
            $(this).addClass("active");
            var filter = $(this).data("filter");
            filterPortfolioItems(filter);
        });

        // Initialize with the "All" filter
        filterPortfolioItems("*");
    }

    // Call the function when the page loads
    $(document).ready(function () {
        initializePortfolioFilter();
    });

    $(document).ready(function() {
        $("img").hover(
            function() {
                $(this).addClass("enlarged");
            },
            function() {
                $(this).removeClass("enlarged");
            }
        );
    });

    $(document).ready(function() {
        // Add and remove active class on navigation item click
        $(".navbar-nav .nav-link").click(function() {
            $(".navbar-nav .nav-link").removeClass("active");
            $(this).addClass("active");
        });

        // Update active navigation item on scroll
        $(window).scroll(function() {
            var currentPosition = $(this).scrollTop();
            $(".navbar-nav .nav-link").each(function() {
                var targetElement = $($(this).attr("href"));
                if (targetElement.position().top <= currentPosition && (targetElement.position().top + targetElement.height()) > currentPosition) {
                    $(".navbar-nav .nav-link").removeClass("active");
                    $(this).addClass("active");
                }
            });
        });
    });

    $(document).ready(function() {
        $('#submitButton').click(function() {
          var email = $('#emailInput').val();
      
          $.ajax({
            url: '/send-email',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email }),
            success: function(result) {
              alert('Email received successfully');
            },
            error: function(error) {
              alert('Email received successfully');
              window.location.reload() 
            }
          });
        });
      });

      $(document).ready(function() {
        $('#requestCall').click(function() {
          var email = $('#requestCall').val();
      
          $.ajax({
            url: '/send-email',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email }),
            success: function(result) {
              alert('Email received successfully');
            },
            error: function(error) {
              alert('Email received successfully');
              window.location.reload() 
            }
          });
        });
      });
    
})(jQuery);


