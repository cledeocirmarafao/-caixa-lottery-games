function menu() {
    const menuLinks = document.querySelectorAll('.navbar-link')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link) {
                menuLinks.forEach(event => event.classList.remove('active'))
                link.classList.add('active')
            }
    })
})
}

export { menu }