function change() {
  var prev = document.getElementById("result");
  while (prev.hasChildNodes()) {
    prev.removeChild(prev.firstChild);
    document.getElementById("jumbotron").style.display = "none";
  }
}
document.getElementById("gen").addEventListener("click", function findgif() {
  change = () => {
    var prev = document.getElementById("result");
    while (prev.hasChildNodes()) {
      prev.removeChild(prev.firstChild);
      document.getElementById("jumbotron").style.display = "none";
    }
  };
  const search = document.getElementById("gems").value;
  const giphy_api =
    "https://api.giphy.com/v1/stickers/search?api_key=q3QagzSyRQOWCBNyV2t8ow0xKnuCWpSP&q=" +
    search +
    "&limit=25&offset=0&rating=G&lang=en";

  console.log(giphy_api);
  fetch(giphy_api)
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .then(json => {
      console.log(json);
      var loc = json.data[0].images["fixed_height_still"].url;
      console.log(loc);
      var outcome = document.getElementById("result");
      var img = document.createElement("img");
      img.src = loc;
      outcome.appendChild(img);
      document.getElementById("jumbotron").style.display = "block";
    })
    .catch(err => {
      $(document).ready(function() {
        $("#myModal").modal();
      });
    });
});
