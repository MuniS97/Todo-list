let doc = document;


// let form2 = doc.querySelector('form'); // [2]

// работает при нажатии на кнопку
// form2.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let h1 = doc.createElement('h1')
//     h1.innerHTML = form2[0].value
//     doc.body.appendChild(h1)
//     form2[0].value = ''
// });



// let p = doc.querySelector('p')
// form2[0].addEventListener('input', (e) => {
//     p.innerHTML = form2[0].value
// });


// let inp = document.querySelector('input')
// // работает при фокусировки на input
// inp.addEventListener('focus', (e) => {
//     doc.body.style.background = 'gray'
// });


// // работает при нажатии на пустоту на input
// inp.addEventListener('blur', (e) => {
//     doc.body.style.background = 'white'
// });


// let rad = doc.querySelector('input[type="radio"]')
// console.log(rad.checked);

// let checkbox = doc.querySelector('input[type="checkbox"]')
// console.log(checkbox.checked);


let form = doc.querySelector('form');
let container = doc.querySelector('.container');
let inp = doc.querySelector('input');
let btn = doc.querySelector('.submit');
let grid_block = doc.querySelector('.grid_blocks');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (form[0].value == "") {
        alert('Adding is not available due to bure input')
    } else {

        let block = doc.createElement('div')
        block.classList.toggle('block')
        grid_block.insertAdjacentElement('beforeend', block)

        let block_h2 = doc.createElement('h2')
        block_h2.classList.toggle('block_h2')
        block_h2.textContent = form[0].value
        block.insertAdjacentElement('beforeend', block_h2)

        let time = new Date().toLocaleString()
        let p_time = doc.createElement('p')
        p_time.classList.toggle('p_time')
        p_time.textContent = time.slice(12)
        block.insertAdjacentElement('beforeend', p_time)

        let exit_block = doc.createElement('div')
        exit_block.classList.toggle('exit')
        exit_block.textContent = 'x'
        block.insertAdjacentElement('beforeend', exit_block)

        exit_block.addEventListener('click', (e) => {
            e.preventDefault();
            block.classList.toggle('not_active')
            block_h2.classList.toggle('not_active')
            // block_h2.textContent = ""
            p_time.classList.toggle('not_active')
            // p_time.textContent = ""
            exit_block.classList.toggle('not_active')
            // exit_block.textContent = ""
        })
    }


    form[0].value = ""
})


let exit_p = doc.querySelector('.exit')
let block = doc.querySelector('.block')
let block_h2 = doc.querySelector('.block_h2')
let p_time = doc.querySelector('.p_time')

exit_p.addEventListener('click', (e) => {
    e.preventDefault();
    block.classList.toggle('not_active')
    block_h2.classList.toggle('not_active')
    p_time.classList.toggle('not_active')
    exit_p.classList.toggle('not_active')
})

let exit_p1 = doc.querySelector('.exit1')
let block1 = doc.querySelector('.block1')
let block_h21 = doc.querySelector('.block_h21')
let p_time1 = doc.querySelector('.p_time1')

exit_p1.addEventListener('click', (e) => {
    e.preventDefault();
    block1.classList.toggle('not_active')
    block_h21.classList.toggle('not_active')
    p_time1.classList.toggle('not_active')
    exit_p1.classList.toggle('not_active')
})

let exit_p2 = doc.querySelector('.exit2')
let block2 = doc.querySelector('.block2')
let block_h22 = doc.querySelector('.block_h22')
let p_time2 = doc.querySelector('.p_time2')

exit_p2.addEventListener('click', (e) => {
    e.preventDefault();
    block2.classList.toggle('not_active')
    block_h22.classList.toggle('not_active')
    p_time2.classList.toggle('not_active')
    exit_p2.classList.toggle('not_active')
})

let exit_p3 = doc.querySelector('.exit3')
let block3 = doc.querySelector('.block3')
let block_h23 = doc.querySelector('.block_h23')
let p_time3 = doc.querySelector('.p_time3')

exit_p3.addEventListener('click', (e) => {
    e.preventDefault();
    block3.classList.toggle('not_active')
    block_h23.classList.toggle('not_active')
    p_time3.classList.toggle('not_active')
    exit_p3.classList.toggle('not_active')
})

