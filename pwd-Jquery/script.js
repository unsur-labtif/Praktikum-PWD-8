$(document).ready(function () {
    // Hide and Show P
    $('#hide').click(function () {
        $('p').hide()
    })

    $('#show').click(function () {
        $('p').show()
    })

    $('#toggle').click(function () {
        $('p').toggle()
    })

    // Fade In and Out
    $('#fadein').click(function () {
        $('#box1').fadeIn();
        $('#box2').fadeIn('slow');
        $('#box3').fadeIn(4000, function () {
            alert('Fade in Selesai!')
        });
    });

    $('#fadeout').click(function () {
        $('#box1').fadeOut();
        $('#box2').fadeOut('slow');
        $('#box3').fadeOut(4000);
    });

    $('#fadetoggle').click(function () {
        $('#box1').fadeToggle();
        $('#box2').fadeToggle('slow');
        $('#box3').fadeToggle(4000);
    });

    //chaining
    $('#chain').click(function () {
        $('#box4').slideUp(2000).slideDown(2000).css({
            backgroundColor: 'red',
        });
    });

    //Animate

    $('#animate').click(function () {
        $('#box5').animate({
            left: '500px',
            opacity: '0.5'
        }, 'slow', function () {
            $(this).css({
                fontSize: '40px',
                transition: 'font-size 1s ease',
            });
        })
    });

    //Jquery Get
    $('#getText').click(function () {
        alert("Text :" + $('#p1').text())
    });
    $('#getHtml').click(function () {
        alert("Text :" + $('#p2').html())
    });
    $('#getVal').click(function () {
        alert("Text :" + $('#name').val())
    });

    // Jquery Add
    $('#add').click(function () {
        $('#p3').append('Ini Paragraf <br>')
    });

    // Jquery Remove
    $('#remove').click(function () {
        $('#p3').remove()
    });
});