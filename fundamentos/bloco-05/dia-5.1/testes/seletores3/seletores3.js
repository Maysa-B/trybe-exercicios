const header = document.getElementById('header-container');

header.style.backgroundColor = 'lightgreen';

document.getElementsByClassName('emergency-tasks') [0].style.backgroundColor = 'purple';

for (let i = 0; i < document.querySelectorAll('.emergency-tasks div h3').length; i += 1) {
    document.querySelectorAll('.emergency-tasks div h3')[i].style.backgroundColor = 'blue'
}

document.getElementsByClassName('no-emergency-tasks') [0].style.backgroundColor = 'yellow';

for (let i = 0; i < document.querySelectorAll('.no-emergency-tasks div h3').length; i += 1) {
      document.querySelectorAll('.no-emergency-tasks div h3')[i].style.backgroundColor = 'red'
}

document.getElementById('footer-container').style.backgroundColor = 'green';