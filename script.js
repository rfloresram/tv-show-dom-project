//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
   const rootElem = document.getElementById("root");

    const tittleElement = document.createElement("h4")
    const imageElement = document.createElement("img")
    const pElement = document.createElement("p")

    rootElem.append(tittleElement, imageElement, pElement)
    console.log(rootElem)

    const title = document.querySelector("h4")
    const image = document.querySelector("img")
    const paragraph = document.querySelector("p")
   
    episodeList.forEach(episodes =>{
    rootElem.innerHTML += title.innerText = episodes.name
  });
}

window.onload = setup;

