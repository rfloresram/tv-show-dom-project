function setup() {

    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);    
}

// function header(){
//   const rootElem = getElementById("root");
//   rootElem.innerHTML = 


  
// }

function makePageForEpisodes(episodeList) {
    
  const rootElem = document.getElementById("root");
    
    episodeList.forEach(episodes => {

        const divElement = document.createElement("div");
        const tittleElement = document.createElement("h4");
        const imageElement = document.createElement("img");
        const summaryElement = document.createElement("div");

        //const pElement = document.createElement("p");

        divElement.append(tittleElement, imageElement, summaryElement);
        
        tittleElement.innerText = episodes.name;
        imageElement.src = episodes.image.medium 
        summaryElement.innerHTML = episodes.summary
        //pElement.innerText = episodes.summary

        rootElem.appendChild(divElement)
    });
}
window.onload = setup;

//Ctrl+K+U