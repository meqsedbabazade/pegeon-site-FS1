var i = 2
var mas = ["http://web-themes.xyz/html/Pegeon/img/home.jpg", "http://web-themes.xyz/html/Pegeon/img/home_3.jpg", "http://web-themes.xyz/html/Pegeon/img/home_2.jpg"]
function left() {
    if (i == -1) {
        i = 2
        document.getElementById('sekil').src = mas[i]
    }
    else {
        document.getElementById('sekil').src = mas[i]
        i--

    }

}
function rigth() {
    if (i == 3) {
        i = 0
        document.getElementById('sekil').src = mas[i]
    }
    else {
        document.getElementById('sekil').src = mas[i]
        i++

    }
}
window.addEventListener("scroll", function () {
    if (window.scrollY > 0 && window.scrollY < 50) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("hom").classList.add("aktiv")
    }
    else if (window.scrollY > 50 && window.scrollY < 800) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("ab").classList.add("aktiv")
    }
    else if (window.scrollY > 800 && window.scrollY < 2700) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("ser").classList.add("aktiv")
    }
    else if (window.scrollY > 2700 && window.scrollY < 3700) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("port").classList.add("aktiv")
    }
    else if (window.scrollY > 3700 && window.scrollY < 5300) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("ex").classList.add("aktiv")
    }
    else if (window.scrollY > 5300 && window.scrollY < 7300) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("pri").classList.add("aktiv")
    }
    else if (window.scrollY > 7300 && window.scrollY < 8000) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("ne").classList.add("aktiv")
    }
    else if (window.scrollY > 8000 && window.scrollY < 8700) {
        document.querySelectorAll('.nav2 ul li a').forEach(p => {
            p.classList.remove("aktiv")
        })
        document.getElementById("con").classList.add("aktiv")
    }
    //bu hisseye qeder scrolly le altindan xet cekmek
    if (window.scrollY > 100) {
        document.getElementById("foto1").style.animationName = "left"
        document.getElementById("foto1").style.animationDuration = "1s"
        document.getElementById("text1").style.animationName = "rigth"
        document.getElementById("text1").style.animationDuration = "1s"

    }
    else {
        document.getElementById("foto1").style.animationName = "left1"
        document.getElementById("foto1").style.animationDuration = "1s"
        document.getElementById("text1").style.animationName = "rigth1"
        document.getElementById("text1").style.animationDuration = "1s"
        document.getElementById("text1").style.animationName = ""

    }
    document.getElementsByClassName("nav2")[0].classList.toggle("sticky", window.scrollY > 0)
    if (window.scrollY > 850) {
        document.getElementsByClassName("scal")[0].style.animationName = "animasiya"
        document.getElementsByClassName("about_divler")[0].style.animationName = "animasiya"
    }
    else if (window.scrollY < 850) {
        document.getElementsByClassName("scal")[0].style.animationName = ""
        document.getElementsByClassName("about_divler")[0].style.animationName = ""
    }
    if (window.scrollY > 2800) {
        document.getElementsByClassName("scal1")[0].style.animationName = "animasiya"
    }
    else if (window.scrollY < 2800) {
        document.getElementsByClassName("scal1")[0].style.animationName = ""
    }
    if (window.scrollY > 4911 && window.scrollY < 5000) {
        document.getElementsByClassName("scal2")[0].style.animationName = "animasiya"
    }
    else if (window.scrollY < 4911) {
        document.getElementsByClassName("scal2")[0].style.animationName = ""
    }
    //bu hisse metn teqlerine verilen animasiya
    if (window.scrollY > 2300) {
        document.getElementById("text_money").style.animationName = "left"
        document.getElementById("text_money").style.animationDuration = "2s"
        document.getElementById("sekil_money").style.animationName = "rigth"
        document.getElementById("sekil_money").style.animationDuration = "2s"

    }
    else {
        document.getElementById("text_money").style.animationName = "left1"
        document.getElementById("text_money").style.animationDuration = "1s"
        document.getElementById("sekil_money").style.animationName = "rigth1"
        document.getElementById("sekil_money").style.animationDuration = "1s"
        document.getElementById("sekil_money").style.animationName = ""
    }

    if (window.scrollY > 4900) {
        document.getElementById("expert_button").style.animationName = "left"
        document.getElementById("expert_button").style.animationDuration = "2s"
        document.getElementById("expert_sekil").style.animationName = "rigth"
        document.getElementById("expert_sekil").style.animationDuration = "2s"

    }
    else {
        document.getElementById("expert_button").style.animationName = "left1"
        document.getElementById("expert_button").style.animationDuration = "1s"
        document.getElementById("expert_sekil").style.animationName = "rigth1"
        document.getElementById("expert_sekil").style.animationDuration = "1s"
        document.getElementById("expert_sekil").style.animationName = ""
    }

})
document.querySelectorAll(".but1").forEach(x => {
    x.addEventListener("mousemove", () => {
        x.style.backgroundColor = "blue"
        x.style.color = "white"
        x.children[0].style.color = "blue"
    })
    x.addEventListener("mouseout", () => {
        x.style.backgroundColor = "transparent"
        x.style.color = "#687c94"
        x.children[0].style.color = "white"
    })
    x.addEventListener("click", () => {
        document.getElementsByClassName("p2")[0].classList.toggle("non")
        // document.getElementsByClassName("p2")[0].style.display="block"
        x.parentElement.appendChild(document.getElementsByClassName("p2")[0])


    })
})


//bu hisseye qeder mousemove

const getHoverDirection = function (event) {
    var directions = ['top', 'right', 'bottom', 'left'];
    var item = event.currentTarget;
    var w = item.offsetWidth;
    var h = item.offsetHeight;
    var x = (event.clientX - item.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1);
    var y = (event.clientY - item.getBoundingClientRect().top - (h / 2)) * (h > w ? (w / h) : 1);
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return directions[d];
};
document.addEventListener('DOMContentLoaded', function (event) {
    var items = document.getElementsByClassName('hover');
    for (var i = 0; i < items.length; i++) {
        ['mouseenter', 'mouseleave'].forEach(function (eventname) {
            items[i].addEventListener(eventname, function (event) {
                var dir = getHoverDirection(event);
                console.log(event.type + ' ' + dir)
                event.currentTarget.classList.remove('mouseenter');
                event.currentTarget.classList.remove('mouseleave');
                event.currentTarget.classList.remove('top');
                event.currentTarget.classList.remove('right');
                event.currentTarget.classList.remove('bottom');
                event.currentTarget.classList.remove('left');
                event.currentTarget.className += ' ' + event.type + ' ' + dir;
            }, false);
        });
    }
});

//bu hisseye qeder hazir kitabxana



const liItem = document.querySelectorAll('.nav_porfolio li');
const imgItem = document.querySelectorAll('.hover');

liItem.forEach(x => {
    x.onclick = function () {
        liItem.forEach(x => {
            x.className = "";
        })
        //   x.className = "active";
        const value = x.textContent;
        imgItem.forEach(y => {
            y.style.display = 'none';
            //   li.style.display="block"

            if (y.getAttribute('data-filter') == value || value == "View All") {

                y.style.display = 'block';
                //   y.style.left="0"

            }
        })
    }
});

document.querySelectorAll(".level").forEach(x => {
    x.style.display = "none"
})
function monthly() {
    document.getElementsByClassName("button_10")[0].classList.add("active")
    document.getElementsByClassName("button_11")[0].classList.remove("active")
    document.querySelectorAll(".level").forEach(x => {
        x.style.display = "none"

    })
    document.querySelectorAll(".lev").forEach(y => {
        y.style.display = "block"
    })
}
function yearly() {
    document.getElementsByClassName("button_11")[0].classList.add("active")
    document.getElementsByClassName("button_10")[0].classList.remove("active")
    document.querySelectorAll(".level").forEach(x => {
        x.style.display = "block"

    })
    document.querySelectorAll(".lev").forEach(y => {
        y.style.display = "none"
    })
}

function addd(x) {
    document.querySelectorAll(".nav2 ul li a").forEach(l => {
        l.classList.remove("aktiv")
    })
    x.classList.add("aktiv")
}




















