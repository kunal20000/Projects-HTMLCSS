function swapTheme() {
    const appDiv = document.getElementById('app').classList;
    const swapel = document.getElementById('swap').classList;
    if(appDiv.contains('day')){
        appDiv.remove('day');
        appDiv.add('night');
        swapel.remove('button_day');
        swapel.add('button_night');
    }else{
        appDiv.remove('night');
        appDiv.add('day');
        swapel.remove('button_night');
        swapel.add('button_day');
    }
}