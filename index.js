const yes = () => {
    const gif = document.getElementById('img')   
    gif.src = "./images/yas-yeah.gif"
    document.getElementById('hide').style.display = 'none'
}

const no = () => {
    const gif = document.getElementById('img')   
    gif.src = "./images/sad-broken-heart.gif"
    document.getElementById('hide').style.display = 'none'
}