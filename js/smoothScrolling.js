var $doc = $('html, body');
            $('.smooth-scrolling').click(function() {
                $doc.animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 500);
                return false;
            });