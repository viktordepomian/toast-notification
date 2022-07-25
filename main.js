const btn = document.querySelector('#btn');
const container = document.querySelector('.container')
const toast = document.querySelector('.toast');

btn.addEventListener('click', () => {
    createToast();
});


function createToast(){
    const div = document.createElement('div');
    div.classList.add('toast');
    div.innerHTML = '<p>Objective Complete!</p>';
    container.append(div);

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);
}

