$(function () {


    var btn=document.querySelector('#btn1')
    btn.onclick=function () {  
    var img = document.querySelector('#img123');
    document.addEventListener('mousemove', function (e) {
        var x = e.pageX
        var y = e.pageY
        img.style.left = x + 'px'
        img.style.top = y + 'px'
    }

    )
}

})