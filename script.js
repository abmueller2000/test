function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    
    var content = document.querySelector('.main-content');
    if (navigation.classList.contains('active')) {
        content.style.marginLeft = '200px';
    } else {
        content.style.marginLeft = '0';
    }
}
