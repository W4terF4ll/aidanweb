function reveal(num) {
    const center = document.getElementById("divCenter");
    center.classList.remove('changed');
    void center.offsetWidth;
    center.classList.add('changed');

    const divsToHide = document.querySelectorAll(".content");
    setTimeout(function(){
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }
        divsToHide[num].style.display = "block";
    }, 350);
}

function disable() {
    document.getElementById("formFood").disabled = true;
}