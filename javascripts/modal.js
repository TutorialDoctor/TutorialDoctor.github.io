const btn = document.getElementsByTagName('button')
const close_button = document.getElementById('close-button');
const alert_box = document.getElementById('alert');
const projects = document.getElementById('projects');

// console.log(data)
data.forEach(item => {
    projects.innerHTML += `<img
    data-name=${item.name} 
    data-image="${item.image}" 
    data-url="${item.url}" 
    onclick="openAlert(this,
        '${item.description}')" 
    class="hover:border-purple-700 border-4 mx-auto rounded-lg w-full shadow-lg rounded-lg h-64 object-cover object-top md:object-center" src="${item.image}" 
    alt=""
    style="height:600px"
>`
});

function openAlert(e,TEXT){
    alert_box.innerHTML = `
        <div class="bg-gray-900 rounded-lg w-full xl:w-1/2 p-8" style="height:auto">
                  <div class="flex flex-col items-start p-4">
                    <div class="flex items-center w-full">
                      <div class="text-2xl text-white my-4">${e.dataset.name}</div>
                      <svg onclick="closeAlert()" class="hover:text-white ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                       </svg>
                    </div>
                    <hr>
                    <img class="mx-auto mx-8 rounded-md shadow:md object-contain h-full w-full" src="${e.dataset.image}"/>
                    <div class="mt-4 text-gray-200">${TEXT}</div>
                    <hr>
                    <div class="mt-5 ml-auto">
                      <a href="${e.dataset.url}"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        ${((e.dataset.url != "") ? 'View' : 'Link Unavailable')}
                      </button>
                      </a>
                      <button onclick="closeAlert()" class="bg-transparent hover:bg-gray-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
    `
    alert_box.classList.remove('hidden')
}

function closeAlert(e){
    alert_box.classList.add('hidden')
}