
$(function () {



    var abig = document.querySelector('#abig')
    var bbig = document.querySelector('#bbig')
    var cbig = document.querySelector('#cbig')
    var dbig = document.querySelector('#dbig')
    var ebig = document.querySelector('#ebig')

    abig.onclick = function () {

        
        //setTimeout("javascript:location.href='aref[1]'", 500);
        //var span=document.querySelector('#span')
        //span.innerHTML='JJJJ'

        //此处放爬虫代码，把链接正则取出后放到bvid[]数组里面

        //此处放产生随机数的代码,产生的随机数放在ran里面
        //var ran = Math.floor(Math.random() * 200)
        //var span=document.querySelector('#span')
        //span.innerHTML=ran
        //之后span的值放到 bvid[span]里，
        let a = document.querySelector('#hrefgoto')
        a.href = 'http://localhost/Ava'
        var bg=document.querySelector('body')
        bg.style.backgroundImage='url(a.png)'
    }

    bbig.onclick = function () {
        //var ran = Math.floor(Math.random() * 200)
        //var span=document.querySelector('#span')
        //span.innerHTML=ran
        //之后span的值放到 bvid[span]里，
        let a = document.querySelector('#hrefgoto')
        a.href = 'http://localhost/Bella'
        var bg=document.querySelector('body')
        bg.style.backgroundImage='url(b.png)'
    }

    cbig.onclick = function () {
        //var ran = Math.floor(Math.random() * 200)
        //var span=document.querySelector('#span')
        //span.innerHTML=ran
        //之后span的值放到 bvid[span]里，
        let a = document.querySelector('#hrefgoto')
        a.href = 'http://localhost/Carol'
        var bg=document.querySelector('body')
        bg.style.backgroundImage='url(c.png)'
    }

    dbig.onclick = function () {
        //var ran = Math.floor(Math.random() * 200)
        //var span=document.querySelector('#span')
        //span.innerHTML=ran
        //之后span的值放到 bvid[span]里，
        let a = document.querySelector('#hrefgoto')
        a.href = 'http://localhost/Diana'
        var bg=document.querySelector('body')
        bg.style.backgroundImage='url(d.png)'
    }

    ebig.onclick = function () {
        //var ran = Math.floor(Math.random() * 200)
        //var span=document.querySelector('#span')
        //span.innerHTML=ran
        //之后span的值放到 bvid[span]里，
        let a = document.querySelector('#hrefgoto')
        a.href = 'http://localhost/Eileen'
        var bg=document.querySelector('body')
        bg.style.backgroundImage='url(e.png)'
    }

})