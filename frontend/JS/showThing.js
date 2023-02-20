//fetch et affichage des trucs dans l'api

const getUrl = async (url) => {
  try {
    const result = await fetch(url);
    const resultToJson = await result.json();
    repartitionValue(resultToJson);
  } catch (err) {
    console.log(err);
  }
};

getUrl("http://localhost:3000/api/stuff");

function repartitionValue(stuffs) {
  stuffs.map((item) => {
    //création des elements
    var a = document.createElement("a");
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    var image = document.createElement("img");

    //attributs
    a.setAttribute("href", `./html/profilPage.html`);
    a.className = "coucou";
    a.setAttribute("data-id", `${item._id}`);
    div.className = "profil";
    p.className = "para";
    image.setAttribute("src", item.imageUrl);
    image.className = "imageUrl";

    //creation des textNodes
    var h2Text = document.createTextNode(item.title);
    var pText = document.createTextNode(item.description);

    //appendChild des textNodes
    h2.appendChild(h2Text);
    p.appendChild(pText);

    //appendChild des elements
    document.querySelector(".profil_container").appendChild(a);
    a.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(image);
  });

  var coucou = document.querySelectorAll(".coucou");
console.log(coucou);
coucou.forEach((item) => {
  item.addEventListener("click", gogoLS);
  function gogoLS() {
    var idDataSet = item.dataset.id;
    sessionStorage.setItem("idProfil",idDataSet);
  }
});
}

