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
    
})(jQuery);

