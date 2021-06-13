const mockResponce = "a;b;c;d";

class Game {
  constructor() {}
  /* 
  sendRequest(url, method) {
    return fetch(url).then((res) => res.json());
  }
 */
  addGameField(str) {
    const arr = str.split(";");
    arr.forEach((el) => {
      const gameWindow = document.createElement("li");
      gameWindow.innerHTML = el;
      gameWindow.classList.add("tic");
      document.querySelector("#gameBoard").appendChild(gameWindow);
    });
  }

  receive() {
    $.ajax({
      type: "GET",
      global: false,
      dataType: "json",
      url: "/game/getString",
      success: (res) => {
        this.addGameField(res).bind(this);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
}

const myGame = new Game();
myGame.receive();
