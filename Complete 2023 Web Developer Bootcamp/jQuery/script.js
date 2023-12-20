$(document).ready(function() {
    $('body').css('background', '#262626');
});

$('h1').addClass('big-title margin-left');

$('h1').text('Goodbye');

// .html('');

// $('img').attr('src');
// $('a').attr('href', 'https://www.yahoo.com');

$('h1').click(function() {
    alert('hello');
});

$('button').click(function() {
    $('h1').css('color', 'purple');
});

$('input').keypress(function(event) {
    console.log(event.key);
});

$('h1').on('mouseover', function() {
    $('h1').css('color', '#0099ff');
});

$('h1').before('<button>New Button</button>');