const gameField = `
<ul id="gameBoard">
    <li class="tic" id="0_0"></li>
    <li class="tic" id="0_1"></li>
    <li class="tic" id="0_2"></li>
    <li class="tic" id="1_0"></li>
    <li class="tic" id="1_1"></li>
    <li class="tic" id="1_2"></li>
    <li class="tic" id="2_0"></li>
    <li class="tic" id="2_1"></li>
    <li class="tic" id="2_2"></li>
</ul>
`;

const gamesArray = [1, 2, 3, 4, 5, 6, 7, 8];
const backUrl = '';

class Game {
  constructor() {}

  sendRequest(url, method) {
    return fetch(url).then((res) => res.json());
  }

  addGameField(arr) {
    arr.forEach(() => {
      const gameWindow = document.createElement("li");
      gameWindow.classList.add("tic");
    //   gameWindow.innerHTML = gameField;
      document.querySelector('#gameBoard').appendChild(gameWindow);
    });
  }
}

const myGame = new Game();
myGame.sendRequest(backUrl);
myGame.addGameField(gamesArray);
