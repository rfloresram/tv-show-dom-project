function setup() {

    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);    
}

// Adding Season # description to the image miniature. 

function header(){
  const rootElem = document.getElementById("root");
  const pElement = document.createElement("p");
  const ParagraphElement  = document.getElementsByTagName(pElement);
 //rootElem.appendChild(ParagraphElement)
  rootElem.innerHTML = `<div class="container">
        <form class="mb-3">
          <select class="episode-select me-md-5 col-12 col-md-5 mb-2" id="movie" name="movies"> 
          <option class="select-option" value="">See All Episodes</option>; 
          </select>
          <input class="me-3 col-md-5 col-12 mb-2 search" type="search" placeholder="Search" aria-label="Search">
          <p class="search-result text-end"></p>
          </form>
      </div>`
}

function makePageForEpisodes(episodeList){
  header();

  return header
}

// Adding Season # description to the image miniature. 
function getSeasonNumber(seasonNumber){
    if(seasonNumber <= 9 ){
      return "0" + seasonNumber 
    } 
      return seasonNumber
}      

// Adding Episode # description to the image miniature. 
function getEpisodeNumber(episodeNumber){
    if(episodeNumber <= 9 ){
      return "0" + episodeNumber 
    } 
      return episodeNumber
}      

// Calling Elements
function makePageForEpisodes(episodeList) {
  header();
  const rootElem = document.getElementById("root");
    
    episodeList.forEach(episodes => {

         divElementContainer = document.createElement("div");
         tittleElement = document.createElement("h4");
         imageElement = document.createElement("img");
         summaryElement = document.createElement("div");
         pElement = document.createElement("p");
         seasonElement =document.createElement("span")
         numberElement = document.createElement("span")
         headerElementContainer = document.createElement("div");

        headerElementContainer.append(tittleElement,seasonElement,numberElement)
        headerElementContainer.setAttribute("class", "wrapper");

        divElementContainer.append(headerElementContainer, imageElement, summaryElement);

        tittleElement.innerText = episodes.name
        imageElement.src = episodes.image.medium 
        summaryElement.innerHTML = episodes.summary
        pElement.innerText = episodes.summary
        seasonElement.innerText = "S" + getSeasonNumber(episodes.season)
        numberElement.innerText = "E"+ getEpisodeNumber(episodes.number)


        rootElem.appendChild(divElementContainer)

    });

    const inputElement = document.querySelector(".search")
    inputElement.addEventListener("input", searchEpisodes)
    function searchEpisodes(){

      const inputElementValue = document.querySelector(".search").value
      let value = inputElementValue.toLowerCase();
      const container = document.querySelectorAll(".wrapper");
      container.forEach(episode => {

        const containerValue = episode.textContent.toLowerCase();

        if(containerValue.includes(value)){
          episode.style.display = ""
        } else { episode.style.display = "none"
        
        }

      })
      
    }
}
window.onload = setup;

//Ctrl+K+U```
//Ctrl+K+C```