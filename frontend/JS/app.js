var bouton = document.querySelector("#boutonAdd");

bouton.addEventListener("click", createThing);

function createThing(e) {
  e.preventDefault();

  const getAddress = async (url) => {
    try{
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.form.title.value,
        description: e.target.form.describe.value,
        imageUrl: e.target.form.image.value,
      }),
    });
}catch(err){
    console.log(err);
}
   window.location.href = "http://127.0.0.1:5500/frontend/index.html";
  };
  getAddress("http://localhost:3000/api/stuff");
}
