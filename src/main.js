function reveal(num) {
    changeAnim();

}

function changeAnim() {
    const center = document.getElementById("divCenter");
    center.classList.remove('changed');
    void center.offsetWidth;
    center.classList.add('changed');
    const content = document.getElementById("divCenterContent");
    content.classList.remove('changedText');
    void content.offsetWidth;
    content.classList.add('changedText');
}