const t7 = document.getElementById('text7')
const t8 = document.getElementById('text8')

document.addEventListener('DOMContentLoaded', function() {

t7.addEventListener('mouseenter', () => {
    t7.style.cursor = 'pointer'
    t7.style.backgroundColor = 'rgba(3, 95, 95, 0.2)'
})

t7.addEventListener('mouseleave', () => {
    t7.style.cursor = 'default'
    t7.style.backgroundColor = 'darkcyan'
})

t8.addEventListener('mouseover', () => {
    console.log("e")
    t8.style.cursor = 'pointer'
    t8.style.backgroundColor = 'rgba(3, 95, 95, 0.2)'
})

t8.addEventListener('mouseleave', () => {
    console.log("l")
    t8.style.cursor = 'default'
    t8.style.backgroundColor = 'darkcyan'
})

t7.addEventListener('pointerup', () => {
    console.log("u")
    window.location.href='index.html'
})

t8.addEventListener('pointerup', () => {
    window.location.href='http://play.google.com/store/apps/details?id=com.mindtame.app'
    console.log("y")
})

})


