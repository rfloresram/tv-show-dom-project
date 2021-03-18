function setup() {

    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);    
}

// function header(){
//   const rootElem = getElementById("root");
//   rootElem.innerHTML = 


  
// }

function getSeasonNumber(seasonNumber){
    if(seasonNumber <= 9 ){
      return "0" + seasonNumber 
    } 
      return seasonNumber
}      

function makePageForEpisodes(episodeList) {
    
  const rootElem = document.getElementById("root");

        let divElement = document.createElement("div");
        let tittleElement = document.createElement("h4");
        let imageElement = document.createElement("img");
        let summaryElement = document.createElement("div");
        let pElement = document.createElement("p");
        let seasonElement =document.createElement("span")
        let numberElement = document.createElement("span")
    
    episodeList.forEach(episodes => {

         divElement = document.createElement("div");
         tittleElement = document.createElement("h4");
         imageElement = document.createElement("img");
         summaryElement = document.createElement("div");
         pElement = document.createElement("p");
         seasonElement =document.createElement("span")
         numberElement = document.createElement("span")
         headerElement = document.createElement("div");

        headerElement.append(tittleElement,seasonElement,numberElement)
  
        divElement.append(headerElement, imageElement, summaryElement);

        tittleElement.innerText = episodes.name
        imageElement.src = episodes.image.medium 
        summaryElement.innerHTML = episodes.summary
        pElement.innerText = episodes.summary
        seasonElement.innerText = "S" + getSeasonNumber(episodes.season)
        numberElement.innerText = "E"+ episodes.number 


        rootElem.appendChild(divElement)

    });
}
window.onload = setup;

//Ctrl+K+U