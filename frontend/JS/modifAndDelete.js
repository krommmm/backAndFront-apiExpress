function deleteThing(e){

}

var id = sessionStorage.getItem("idProfil");
console.log(id);

const getAddress = async (url) => {
  try 
  {
    const result = await fetch(url);
    const result2Json = await result.json();
    //sessionStorage.removeItem("idProfil");

    //création des elements
   var div = document.createElement("div");
   var h2 = document.createElement("h2");
   var p = document.createElement("p");
   var image = document.createElement("img");

   //attributs
   div.className = "profil";
   p.className = "para";
   image.setAttribute("src", result2Json.imageUrl);
   image.className = "imageUrl";

   //creation des textNodes
   var h2Text = document.createTextNode(result2Json.title);
   var pText = document.createTextNode(result2Json.description);

   //appendChild des textNodes
   h2.appendChild(h2Text);
   p.appendChild(pText);

   //appendChild des elements
   document.body.appendChild(div);
   div.appendChild(h2);
   div.appendChild(p);
   div.appendChild(image);
  } catch (err) {
    console.log(err);
  }
};
getAddress(`http://localhost:3000/api/stuff/${id}`);


function deleteThing(){



    const getAddress2 = async (url) => {
      try{
      const result = await fetch(url, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         id: id,
        }),
      });
  }catch(err){
      console.log(err);
  }
  window.location.reload();
    };
    getAddress2(`http://localhost:3000/api/stuff/${id}`);

}
