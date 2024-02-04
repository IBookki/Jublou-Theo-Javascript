const lightbox = new SimpLightbox(".card a")
const options = {
    gutterPixels: 40
}
 
const filterizr = new Filterizr("portfolio-elements", options)

let  filtersList = document.querySelectorAll(".filter li")
filtersList.forEach(function(filteritem) {
    filteritemilterItem.addEventListener('click', function() {
        document.querySelector('.filters .active').classList.remove('active')
        this.classList.add('active')
})
})