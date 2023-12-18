var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function() {
    button.innerHTML = 'Click complete!';
});

function toggleFlexDirection() {
    var container = document.getElementsByClassName('container')[0];
    if (container.style.flexDirection === 'column') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }
}

var changeFlexButton = document.getElementById('change-flex-btn');
changeFlexButton.addEventListener('click', toggleFlexDirection);