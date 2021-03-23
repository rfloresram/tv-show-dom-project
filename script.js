//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

  // Level 100
function makePageForEpisodes(episodeList) {
  let episodes = [];
  let rootElem = document.getElementById("root");

  
  rootElem.innerHTML = "";
  rootElem.style.backgroundColor = "#FFFFFF";

  console.log(`Got ${episodeList.length} episode(s)`);
  for (let episode of episodeList) {

    let boxContainer = document.createElement("div");
    boxContainer.classList.add("parentWrapper");
    rootElem.appendChild(boxContainer);

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("nameWrapper");
    boxContainer.appendChild(nameContainer);

    //to repeat on Level300
    let rootSeason = `${episode.season}`;
    let rootEpisode = `${episode.number}`;
    let paddedSeason = rootSeason.padStart(2, "0");
    let paddedEpisode = rootEpisode.padStart(2, "0");

    nameContainer.innerHTML = `${episode.name} - S${paddedSeason} E${paddedEpisode}`;

        // seasonElement.innerText = "S" + getSeasonNumber(episodes.season)
        // numberElement.innerText = "E"+ getEpisodeNumber(episodes.number)

    let imgContainer = document.createElement("img");
    imgContainer.classList.add("imageWrapper");

    let usedImage = episode.image.medium;
    imgContainer.src = usedImage;
    boxContainer.appendChild(imgContainer);

    let txtContainer = document.createElement("span");
    txtContainer.classList.add("textWrapper");
    txtContainer.innerHTML = `${episode.summary}`;
    boxContainer.appendChild(txtContainer);

    episodes.push(episode);
  }
}

// Level 200
let headerElement = document.getElementsByTagName("header")[0];
let inputElement = document.createElement("input");
inputElement.classList.add("input");
inputElement.setAttribute("placeholder", "Search");

let displayElement = document.createElement("div");
displayElement.classList.add("display");

let paragraphElement = document.createElement("p");
paragraphElement.classList.add("paragraph");
headerElement.appendChild(inputElement);
headerElement.appendChild(displayElement);
displayElement.appendChild(paragraphElement);

function searchEpisodes() {

  // study group catch up 
  let filteredEpisodes = [];
  let episodeList = getAllEpisodes();

  let word = document.getElementsByTagName("input")[0].value;
  word = word.toLowerCase();

  let counter = 0;
  for (let episode of episodeList) {
    if (
      episode.name.toLowerCase().match(word) ||
      episode.summary.toLowerCase().match(word) ||
      episode.name.toLowerCase().match(parseInt(word)) ||
      episode.summary.toLowerCase().match(parseInt(word))
    ) {
      filteredEpisodes.push(episode);
      counter++;
    }
  }
  paragraphElement.innerHTML = `Displaying ${counter} / ${episodeList.length} episode(s)`;
  makePageForEpisodes(filteredEpisodes);
}
inputElement.addEventListener("input", searchEpisodes);

window.onload = setup;

// Level 300
let listOfEpisodes = getAllEpisodes();
let selectList = document.createElement("select");
selectList.id = "mySelect";
selectList.classList.add("select");
headerElement.appendChild(selectList);

let option = document.createElement("option");
option.classList.add("option");
option.textContent = "Episode list";
selectList.appendChild(option);

// used the tool for level100
for (let episode of listOfEpisodes) {
  let option = document.createElement("option");
  let rootSeason = `${episode.season}`;
  let rootEpisode = `${episode.number}`;
  let paddedSeason = rootSeason.padStart(2, "0");
  let paddedEpisode = rootEpisode.padStart(2, "0");

  option.value = listOfEpisodes.indexOf(episode);
  option.text = `S${paddedSeason}E${paddedEpisode} - ${episode.name}`;
  selectList.appendChild(option);
}

function selectOneEpisode() {
  if (document.getElementById("mySelect").value === "Option selector") {
    makePageForEpisodes(listOfEpisodes);
  } else {
    let selectedEpisode = [];
    let index = document.getElementById("mySelect").value;
    let episodeObject = listOfEpisodes[index];
    selectedEpisode.push(episodeObject);
    makePageForEpisodes(selectedEpisode);
  }
}

selectList.addEventListener("change", selectOneEpisode);

//Ctrl+K+U```
//Ctrl+K+C```