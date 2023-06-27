function SearchPhotos() {
  let query = document.getElementById("search").value;
  let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=o2nu4A3Ul6z7dsiKtmbamY_5qJoKqQe36gspagHHQa0`;

  // make a request to the api

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      data.results.forEach((photo) => {
        let result = `
        <div class= "setImg">
            <img src ="${photo.urls.regular}">
            <a href = "${photo.links.download}">
        </div>
            `;

        $("#result").append(result);
      });
    });
}
