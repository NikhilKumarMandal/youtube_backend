let main = document.querySelectorAll('.hii')

main.forEach( function(e) {
  
    e.addEventListener('mouseenter', () => {
       e.childNodes[3].style.opacity = 1 
    })
    e.addEventListener('mouseleave', () => {
        e.childNodes[3].style.opacity = 0
    } )
    e.addEventListener('mousemove', (tits) => {
        e.childNodes[3].style.left  = tits.x + 'px'
        e.childNodes[3].style.top  = tits.y + 'px'
    })
} )

