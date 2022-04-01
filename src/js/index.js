
// Filter block

$(".checked-year").bind("click", function() {
    $('#selected-year').val(this.value);
});

$( "input[type=radio][name=baz]:checked" ).val();


// subscribe slider

var swiper = new Swiper(".subscribe-slider", {
    navigation: {
        nextEl: ".subscribe-slider-next",
        prevEl: ".subscribe-slider-prev",
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Tab block

function openTabBlockOverview(evt, name) {
    var i, tabcontent, tablinks;
    var currentblock = document.getElementById('overview');
    tabcontent = currentblock.getElementsByClassName("tab-block-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = currentblock.getElementsByClassName("tab-block-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function openTabBlock(evt, name) {
    var i, tabcontent, tablinks;
    var currentblock = document.getElementById('article');
    tabcontent = currentblock.getElementsByClassName("tab-block-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = currentblock.getElementsByClassName("tab-block-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenArticle").click();

