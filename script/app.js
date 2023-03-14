// dados mocado

const episodes = [
  {
    img: "./imagens/episodes/episode1.svg",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./imagens/episodes/episode2.svg",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./imagens/episodes/episode3.svg",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./imagens/episodes/episode4.svg",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
];

//1. acessar a lista de produtos através do DOM
const list = document.querySelector(".episodes-list");

//2. criar uma função para percorrer todos os meus episódios que estão listadas na variável episodes
function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {
    
    //3. criar uma função "renderCard" que renderize epidio a episodia
    renderCard(episodes[i]);
  }
}

//4. chamando a função "addCard"
addCard(episodes);

//5. Criando a função "renderCard" que renderiza epidio a episodia
function renderCard(episodio){
    const listItem = document.createElement("li"); // criando uma tag "li" no DOM
    listItem.classList.add("card"); // adicionando a classe "card" nessa tag "li" criada no DOM

    // para adicionar toda a estrutura de html ("img"... "div"... "h4"...) dentro da "li" com o ".innerHTML"
    listItem.innerHTML = `
    <img src=${episodio.img} alt=${episodio.title}/>
    <div class="card-text">
        <h4>${episodio.title}</h4>
        <p>${episodio.description}</p>
    </div>
    `;

    // acessar a variável criada "list" com o "appendChild" para inserir a "listItem"
    list.appendChild(listItem);
}