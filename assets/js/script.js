(() => {
    //---------------------------------- TO TOP BUTTON ------------------------------------

    //---------------------------------- NAVBAR ------------------------------------

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            document.getElementById("myNav").classList.add("nav-colored");
        } else {
            document.getElementById("myNav").classList.remove("nav-colored");
        }
    }

    //---------------------------------- MODAL POTO ------------------------------------


    function login() {
        $('#modlogin').modal('toggle')
    }

    document.getElementById('login').addEventListener('click', login)


    function register() {
        $('#modregister').modal('toggle')
    }

    document.getElementById('register').addEventListener('click', register)

    //---------------------------------- FETCH WHESH ------------------------------------

    const MOVIE = async cat => {
        const REQUEST = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0b71d51c9048d107297da2c4b288038d&language=en-US&page=1')
        const DATA = await REQUEST.json()
        const ARR = await DATA.results
        const DIV = document.getElementById('movie')
        DIV.innerHTML = ""
        console.log(ARR)

        for (let i = 0; i < 5; i++) {
            let rand = Math.round(Math.random() * 20)
            let idgenre = ""
            genre.forEach(gen => {
                if (gen.id == ARR[rand].genre_ids[0])
                    idgenre = gen.name
            })

            ARR[rand].genre_ids[0]

            const HTML = document.createElement("div");
            HTML.classList = 'card defaultCard col-lg-2 col-md-2 col-sm-6 col-xs-12 mx-auto';
            HTML.style = 'width: 18rem';
            HTML.innerHTML = `<img src="${`https://image.tmdb.org/t/p/w500/${ARR[rand].poster_path}`}" class="card-img-top" alt="..."> 
          <div class="card-body"> <h5 class="card-title">${ARR[rand].title}</h5> 
          <p class="card-text">${ARR[rand].release_date.slice(0, 4)} </p>
          <p class='ml-auto'>${idgenre}</p>`
            document.getElementById("movie").appendChild(HTML)
        }
    }

    MOVIE()

    const FEATURED = async cat => {
        const REQUEST = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b71d51c9048d107297da2c4b288038d&language=en-US&page=1')
        const DATA = await REQUEST.json()
        const ARR = await DATA.results
        const ROW = document.getElementById('featured')
        ROW.innerHTML = ""
        console.log(ARR)

        ARR.forEach((element, index) => {
            if (index < 12) {
                const HTML = document.createElement('div')
                HTML.classList = "card defaultCard col-lg-2 col-md-6 col-sm-6 col-xs-12 mx-auto"
                HTML.id = `featured-${element.id}`
                HTML.style = "width: 18rem"
                HTML.innerHTML = `<img src="${`https://image.tmdb.org/t/p/w500/${element.poster_path}`}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.release_date.slice(0, 4)}</p>
                </div>`
                document.getElementById('featured').appendChild(HTML)
            } else {
                const HTML = document.createElement("div")
                HTML.classList =
                    "card  defaultCard col-lg-2 col-md-6 col-sm-6 col-xs-12 mx-auto hidden"
                HTML.style = "width: 18rem;"
                HTML.id = `featured-${element.id}`
                HTML.innerHTML = `
              <img src="${`https://image.tmdb.org/t/p/w500/${element.poster_path}`}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.release_date.slice(0, 4)}</p>
              </div>`
                document.getElementById("featured").appendChild(HTML)
            }
        })
    }
    FEATURED(0)

    document.getElementById("plus-film").addEventListener("click", () => {
        Array.from(document.getElementById("featured").childNodes).forEach(
            (element, index) => {
                if (index >= 12) element.classList.toggle("hidden")
            }
        )
    })

    const genre = [{
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ]
})()