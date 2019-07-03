const t7 = document.getElementById('text7')
const t8 = document.getElementById('text8')

const body = document.querySelector('body')

// Prevent Pull to Refresh iOS
function preventPullToRefresh(element) {
    var prevent = false;

    document.querySelector(element).addEventListener('touchstart', function(e){
      if (e.touches.length !== 1) { return; }

      var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
      prevent = (scrollY === 0);
    });

    document.querySelector(element).addEventListener('touchmove', function(e){
      if (prevent) {
        prevent = false;
        e.preventDefault();
      }
    });
}


document.addEventListener('DOMContentLoaded', function() {

preventPullToRefresh('body')

t7.addEventListener('mouseenter', () => {
    t7.style.cursor = 'pointer'
    t7.style.backgroundColor = 'rgba(3, 95, 95, 0.2)'
})

t7.addEventListener('mouseleave', () => {
    t7.style.cursor = 'default'
    t7.style.backgroundColor = 'darkcyan'
})

t8.addEventListener('mouseover', () => {
    t8.style.cursor = 'pointer'
    t8.style.backgroundColor = 'rgba(3, 95, 95, 0.2)'
})

t8.addEventListener('mouseleave', () => {
    t8.style.cursor = 'default'
    t8.style.backgroundColor = 'darkcyan'
})

t7.addEventListener('pointerup', () => {
    window.location.href='index.html'
})

t8.addEventListener('pointerup', () => {
    window.location.href='http://play.google.com/store/apps/details?id=com.mindtame.app'
})

})


