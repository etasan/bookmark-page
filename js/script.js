const tabButton = document.querySelectorAll(".btn-slide button");
const btn1 = document.querySelector(".simple");
const btn2 = document.querySelector(".speedy");
const btn3 = document.querySelector(".easy");
const imagePlayer = document.querySelector(':root');
const titleOne = document.querySelector(".title");
const textOne = document.querySelector(".text");

buttonPressed = '';

function slide() {
    buttonPressed = this.value;
    if (buttonPressed === "simple") {
        btn1.classList.add('btnlinkClicked');
        btn2.classList.remove('btnlinkClicked');
        btn3.classList.remove('btnlinkClicked');
        imagePlayer.style.setProperty('--imageTab', 'url(/images/illustration-features-tab-1.svg)');
        titleOne.innerHTML = 'Bookmark in one click';
        textOne.innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    } else if (buttonPressed === "speedy") {
        btn1.classList.remove('btnlinkClicked');
        btn2.classList.add('btnlinkClicked');
        btn3.classList.remove('btnlinkClicked');
        imagePlayer.style.setProperty('--imageTab', 'url(/images/illustration-features-tab-2.svg)');
        titleOne.innerHTML = 'Intelligent search';
        textOne.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    } else {
        btn1.classList.remove('btnlinkClicked');
        btn2.classList.remove('btnlinkClicked');
        btn3.classList.add('btnlinkClicked');
        imagePlayer.style.setProperty('--imageTab', 'url(/images/illustration-features-tab-3.svg)');
        titleOne.innerHTML = 'Share your bookmarks';
        textOne.innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
}


(Array.from(tabButton)).forEach(a => a.addEventListener('click', slide));