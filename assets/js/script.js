(() => {
    //---------------------------------- TO TOP BUTTON ------------------------------------

    //---------------------------------- NAVBAR ------------------------------------

    window.onscroll = function() {
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

    const FEATURED = async cat => {
        const REQUEST = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b71d51c9048d107297da2c4b288038d&language=en-US&page=1')
        const DATA = await REQUEST.json()
        const ARR = await DATA.results
        const ROW = document.getElementById('featured')
        ROW.innerHTML = ""
        console.log(ARR)

        ARR.forEach((element, index) => {
            if(index < 12){
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

    //---------------------------------- SLIDER ------------------------------------


    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
      })
})()
