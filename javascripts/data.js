const data = [
    {
        name: "Portfolio",
        image: "http://tutorialdoctor.github.io/images/portfolio.png",
        description: "A portfolio page built with HTML, CSS and JS in 2020",
        url:""
    },
    {
        name: "Nextflix1",
        image: "http://tutorialdoctor.github.io/images/net1.png",
        description: "Netflix clone built with VueJS with ruby,python and node servers and styled with Tailwind CSS",
        url:"https://nextflix-2tqpuafwx-thetutorialdoctor.vercel.app/"
    },
    {
        name: "Nextflix2",
        image: "http://tutorialdoctor.github.io/images/net2.png",
        description: "Netflix clone built with VueJS with ruby,python and node servers and styled with Tailwind CSS",
        url:"https://nextflix-2tqpuafwx-thetutorialdoctor.vercel.app/"
    },
    {
        name: "Nextflix3",
        image: "http://tutorialdoctor.github.io/images/net3.png",
        description: "Netflix clone built with VueJS with ruby,python and node servers and styled with Tailwind CSS",
        url:"https://nextflix-2tqpuafwx-thetutorialdoctor.vercel.app/"
    },
    {
        name: "RealEstate",
        image: "http://tutorialdoctor.github.io/images/realestate.png",
        description: "Prototype with Tailwind CSS",
        url:""
    },
    {
        name: "DreamCenter",
        image: "http://tutorialdoctor.github.io/images/dream.png",
        description: "Client website built with VueJS and styled with Bootstrap",
        url:"https://d2imt3pl77kocq.cloudfront.net/"
    },
    {
        name: "Mandalorian",
        image: "http://tutorialdoctor.github.io/images/manda.png",
        description: "Prototype with Tailwind",
        url:""
    },
    {
        name: "Music",
        image: "http://tutorialdoctor.github.io/images/music.png",
        description: "Flask App with SQlite DB with User Auth, created for educational purposes to learn Algorithms and Data Structures design.",
        url:""
    },
    {
        name: "Youtube Downloader",
        image: "http://tutorialdoctor.github.io/images/downloader.png",
        description: "Youtube downloader built with python flask and styled with Tailwind CSS in 2021",
        url:""
    },
    {
        name: "VueStore",
        image: "http://tutorialdoctor.github.io/images/ecommerce.JPG",
        description: "Ecommerce app built with VueJS and styled with Tailwind",
        url:""
    },
    {
        name: "LMS1",
        image: "http://tutorialdoctor.github.io/images/lms1.png",
        description: "Learning management system build with VueJS and styled with Tailwind deployed with Netlify",
        url:"https://jovial-einstein-161567.netlify.app/"
    },
    {
        name: "LMS2",
        image: "http://tutorialdoctor.github.io/images/lms2.png",
        description: "Learning management system build with VueJS and styled with Tailwind deployed with Netlify",
        url:"https://jovial-einstein-161567.netlify.app/"
    },
    {
        name: "GameUI",
        image: "http://tutorialdoctor.github.io/images/gameui.png",
        description: "Prototype with HTML, CSS and JS",
        url:""
    },
    {
        name: "Pukka1",
        image: "http://tutorialdoctor.github.io/images/pukka1.png",
        description: "Ruby on Rails app with Tailwind CSS and other technologies",
        url:"https://safe-caverns-62528.herokuapp.com/"
    },
    {
        name: "Pukka2",
        image: "http://tutorialdoctor.github.io/images/pukka2.png",
        description: "Ruby on Rails app with Tailwind CSS and other technologies",
        url:"https://safe-caverns-62528.herokuapp.com/"
    },
    {
        name: "MedApp",
        image: "http://tutorialdoctor.github.io/images/schedule.png",
        description: "Ruby on Rails app with Tailwind CSS and other technologies",
        url:""
    },
    {
        name: "Photography",
        image: "http://tutorialdoctor.github.io/images/photography.png",
        description: "HTML, CSS, JS from template",
        url:""
    },
    {
        name: "Medemy",
        image: "http://tutorialdoctor.github.io/images/medemy.png",
        description: "Udemy clone prototype with Tailwind CSS",
        url:""
    },
    {
        name: "GoogleDocs1",
        image: "http://tutorialdoctor.github.io/images/docsclone1.png",
        description: "Functional Google Docs clone with ReactJS, Firebase and Google Auth styled with Tailwind CSS deployed with Vercel",
        url: "https://google-docs-clone-lake-six.vercel.app/"
    },
    {
        name: "GoogleDocs2",
        image: "http://tutorialdoctor.github.io/images/docsclone2.png",
        description: "Functional Google Docs clone with ReactJS, Firebase and Google Auth styled with Tailwind CSS deployed with Vercel",
        url: "https://google-docs-clone-lake-six.vercel.app/"
    },
    {
        name: "9Oak",
        image: "http://tutorialdoctor.github.io/images/oak.png",
        description: "Client website made with VueJS, styled with Bootstrap and including a ZOHO integration",
        url:"https://9oaktreeservice.com/"
    },
    {
        name: "Portal",
        image: "https://tutorialdoctor.github.io/images/portal.png",
        description: "Prototype with HTML, CSS and JS",
        url:""
    },
    {
        name: "LiveOakCSMarketingSite",
        image: "https://tutorialdoctor.github.io/images/loa.png",
        description: "Client website with Wordpress",
        url:"https://liveoakcs.com/"
    },
    {
        name: "RealEstatePortal",
        image: "https://tutorialdoctor.github.io/images/real_rails.png",
        description: "Ruby on Rails app with Devise Authentication and Postgres database and Tailwind CSS",
        url:"https://td-real-estate-app.herokuapp.com/"
    },
    {
        name: "Concord-Slack Clone",
        image: "https://tutorialdoctor.github.io/images/slack.png",
        description: "Functional Slack clone with ReactJS, Firebase and Google Auth styled with Tailwind CSS deployed with Firebase Hosting",
        url:"https://concord-38c21.web.app/"
    },
    {
        name: "LiveOakLMLS",
        image: "https://tutorialdoctor.github.io/images/loalms.png",
        description: "Large LMS system built with ruby on rails and styled with tailwind",
        url:"https://portal.liveoakcs.com/users/sign_in"
    },
    {
        name: "FlaskCommerce",
        image: "https://tutorialdoctor.github.io/images/flask_commerce.png",
        description: "Flask App with Postgres DB deployed to Heroku with User Auth, created for educational purposes to teach DB design.",
        url:"https://td-flask-store.herokuapp.com/login"
    },
    {
        name: "HenryCountyDiscGolf",
        image: "https://tutorialdoctor.github.io/images/discgolf.png",
        description: "First VUEJs client website with BULMS CSS",
        url:"https://henrycountydiscgolf.com/"
    },
    {
        name: "BigSouthern",
        image: "https://tutorialdoctor.github.io/images/bss.png",
        description: "VueJS client styled with bootstrap.",
        url:"https://bigsouthernsoftware.com/#/"
    },
    {
        name: "GodotHUB",
        image: "https://tutorialdoctor.github.io/images/godot3dhub.png",
        description: "Client website with using Github pages and TailwindCSS with Github Actions",
        url:"https://tutorialdoctor.github.io/godot-hub.github.io/"
    },
    {
        name: "GameDev",
        image: "https://tutorialdoctor.github.io/images/gamedev.png",
        description: "A platformer Game using GDscript",
        url:""
    },
    {
        name: "Snippets",
        image: "https://tutorialdoctor.github.io/images/snippets.png",
        description: "An idea to make life easier for me",
        url:"https://venv-psi.vercel.app/"
    }
]