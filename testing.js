// create a namespace to respresent our app
const app = {};

// store api key within our app object
app.apiKey = 'vL5fuWkG';

//  define a method (AKA function) on our app object which will make an asynchronous request to our API for images
app.apiUrl = 'https://www.rijksmuseum.nl';

app.summonArt = (animal) => {
    $.ajax({
        url: `${app.apiUrl}/api/en/collection`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: app.apiKey,
            // increase returned results to 20
            ps: 20,
            // request art relating to animal selected from dopdown
            q: animal,
            imgonly: true
        }
    }).then((artResponse) => {
        // console.log(artResponse.artObjects);

        // call showArt within the then method so that we can pass the response from the AJAX request as an argument into the showArt method
        app.showArt(artResponse.artObjects);
    })
}

// define a method which will take the images given to us by the API and render them on our page (AKA the front end)
app.showArt = (masterpieces) => {
    // console.log(allTheArt);

    // loop through the array that is passed to this method from the ajax response
    // take the data from each art object in the array and render it on the page
    masterpieces.forEach((singleMasterpiece) => {

        let masterpiece = `
            <div class="piece">
                <h2>${singleMasterpiece.title}</h2>
                <img src="${singleMasterpiece.webImage.url}" alt="${singleMasterpiece.longTitle}">
                <p class="artist">${singleMasterpiece.principalOrFirstMaker}</p>
            </div>
        `;

        $('#artwork').append(masterpiece);
    });
}

// create a method which will hold an event listener
// this event listener will listen for every time the user selects a new animal from the dropdown
// using a function expression because we want to be confident about the value of "this" within the event listener

app.dropdownEventListener = function () {
    $('#creature').on('change', function () {
        const chosenCreature = $(this).val();

        // empty the container
        $('#artwork').empty();

        // call summonArt method within the select event listener and pass in the animal that was chosen so the ajax request can be made with a new animal
        app.summonArt(chosenCreature);

        // update the span within the h1 to reflect chosen animal
        $('.currentAnimal').text(chosenCreature + "s");
    });
}

// define a method which will initialize the app once the document is ready
app.init = () => {
    console.log("App is initialized");
    app.summonArt();
    app.dropdownEventListener();
}

// check whether the document is ready
$(function () {
    console.log("App is ready");
    // call the init method
    app.init();
});
