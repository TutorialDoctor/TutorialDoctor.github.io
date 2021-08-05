

var img = 0;
var slides = new Array();
var files = [
    "airplane-3x.jpg",
    "bear-3x-1.jpg",
    "because-3x.jpg",
    "bluejay-3x.jpg",
    "bravo-3x-2.jpg",
    "gold1.png",
    "cesarian-3x.png",
    "classy-3x-1.jpg",
    "decency-3x.jpg",
    "drawing-119_1.png",
    "goat-3x.jpg",
    "img-1731-orig.jpg",
    "img-4434_1.jpg",
    "img-4435_1.jpg",
    "img-4437_1.jpg",
    "img-4503.jpg",
    "kilt-3x.jpg",
    "knoob-3x.jpg",
    "live-mirror.png",
    "logos-orig.png",
    "page_1.png",
    "page.png",
    "photo-1.png",
    "pure-3x-1.jpg",
    "quilt-3x.jpg",
    "spot-3x.jpg",
    "tuuth-3x.jpg",
    "updown.jpg",
    "wavey-3x-1.jpg",
    "worm-3x.jpg",
    "yellow-jacket-3x.jpg",
    "zebra-3x.jpg"
];

const btn = document.getElementsByTagName('button')
const close_button = document.getElementById('close-button');
const alert_box = document.getElementById('alert');
const designs = document.getElementById('designs');




files.forEach(function(f){
    var src = '../images/designs/' + f;
    slides.push(src);
    designs.innerHTML += `<img class="hover:border-purple-700 border-4 mx-auto rounded-lg w-64 shadow-lg rounded-lg h-64 object-cover"" data-src=${src} src="${src}" 
    alt=""
>`
});
console.log(slides)

function openDesignAlert(e,TEXT){
    alert_box.innerHTML = `
        <div class="bg-gray-900 rounded-lg w-full xl:w-1/2 p-8" style="height:auto">
                  <div class="flex flex-col items-start p-4">
                    <div class="flex items-center w-full">
                      <div class="text-2xl text-white my-4">Name</div>
                      <svg onclick="closeDesignAlert()" class="hover:text-white ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                       </svg>
                    </div>
                    <hr>
                    <img class="mx-auto mx-8 rounded-md shadow:md object-contain h-full w-full" src="${e.dataset.src}"/>
                    <div class="mt-4 text-gray-200">Description</div>
                    <hr>
                    <div class="mt-5 ml-auto">
                      <a href="#" target="_blank"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        View
                      </button>
                      </a>
                      <button onclick="closeDesignAlert()" class="bg-transparent hover:bg-gray-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
    `
    alert_box.classList.remove('hidden')
}

function closeDesignAlert(e){
    alert_box.classList.add('hidden')
}
