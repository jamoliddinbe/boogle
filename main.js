let query = document.querySelector('.query')
let btn = document.querySelector('.btn')
btn.onclick = function(){
    let url = 'https://www.google.com/search?q=' + query.value
    window.open(url, '_self')
}

