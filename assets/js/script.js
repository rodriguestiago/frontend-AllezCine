(() => {
    //---------------------------------- TO TOP BUTTON ------------------------------------

    //Get the button:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

            }
        })
    }
    FEATURED(0)
})()