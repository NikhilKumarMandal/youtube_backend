let main = document.querySelector('#main')
let cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', (e) => {
    cursor.style.left = e.x+'px'
    cursor.style.top = e.y+'px'
})
