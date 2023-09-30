var products = [
    {
        id: 1,
        name: "3-hr Godot Development Training",
        description: "A 3 hour zoom training on how to create a 2D platformer with the Godot game Engine from scratch.",
        price: 495.00,
        link: "https://link.waveapps.com/9reyp4-w7p928",
        image_url:"https://raw.githubusercontent.com/godotengine/godot-design/master/screenshots/editor_tps_demo_1920x1080.jpg"
    },
    {
        id: 2,
        name: "3-hr Python Training",
        description: "A 3 hour zoom course teaching Python and Python Flask.",
        price: 495.00,
        link: "https://link.waveapps.com/jm96dv-kx7dej",
        image_url:"https://images.prismic.io/pmsoftware/fa25c290-9af4-44f3-b534-3c3bd7f5ee01_pm2.png"
    },
    {
        id: 3,
        name: "3-hr Ruby on Rails Training",
        description: "A 3 hour zoom course teaching Ruby & Ruby on Rails",
        price: 495.00,
        link: "https://link.waveapps.com/eqhba4-ymcq75",
        image_url:"https://tutorialdoctor.github.io/images/real_rails.png"
    },
    {
        id: 4,
        name: "3-hour UI Design Training",
        description: "A 3 hour zoom course teaching UI Design",
        price: 495.00,
        link: "https://link.waveapps.com/jb4m8v-9ar65a",
        image_url:"http://tutorialdoctor.github.io/images/net1.png"
    }
]

var product_container = document.getElementById('products');

// console.log(data)
products.forEach(item => {
    product_container.innerHTML += `
    <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <a href="${item.link}">
                    <img style="width:300px;height:300px" class="rounded-lg object-cover hover:grow hover:shadow-lg" src="${item.image_url}">
                    <div class="pt-3 flex items-center justify-between">
                        <p class="">${item.name}</p>
                        <svg class="h-6 w-6 fill-current text-white hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                        </svg>
                    </div>
                    <p class="pt-1 text-yellow-500">$${item.price}</p>
                </a>
            </div>
    `
});



document.getElementById("python_button").onclick = function () {
window.location("https://link.waveapps.com/jm96dv-kx7dej");
};
