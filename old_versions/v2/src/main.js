titles = ["Welcome!", "Education", "Skills", "Projects!", "Favorite Media!", "Aidan's Top Website Picks!", "Class Projects"]

function reveal(num) {
    const center = document.getElementById("divCenterWrapper");
    center.classList.remove('changed');
    void center.offsetWidth;
    center.classList.add('changed');

    const divsToHide = document.querySelectorAll(".content");
    const title = document.getElementById("aboutHeader");
    setTimeout(function(){
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }
        divsToHide[num].style.display = "block";
        title.innerText = titles[num];
    }, 350);
}

function disable() {
    document.getElementById("formFood").disabled = true;
}