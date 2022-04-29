function getImage() {
    var url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    
    fetch(url).then(resp => resp.json().then(
        obj => {
            document.getElementById("animal_image").setAttribute("src", obj["image_link"]);
        }
    ))
}

getImage();