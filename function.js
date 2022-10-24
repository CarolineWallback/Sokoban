const CreateBoard = () =>{

    for(let y = 0; y < tileMap01.mapGrid.length; y++)
    {
        for(let x = 0; x < tileMap01.width; x++)
        {
            let div = document.createElement("div");
            
            // W = Wall
            if(tileMap01.mapGrid[y][x] == "W"){
                div.classList.add(Tiles.Wall);
            }
            // B = Movable block
            else if (tileMap01.mapGrid[y][x] == "B"){
                div.classList.add(Entities.Block);
            }
             // P = Player starting position
            else if (tileMap01.mapGrid[y][x] == "P"){
                div.classList.add(Entities.Character);
            }
            // G = Goal area for the blocks
            else if (tileMap01.mapGrid[y][x] == "G"){
                div.classList.add(Tiles.Goal);
            }
            else  {
                div.classList.add(Tiles.Space);
            }

            div.classList.add("tiles");
            div.id = `${x},${y}`;
            document.getElementById("gameboard").append(div);
        }
    }
}

CreateBoard();

addEventListener("keydown", function (e){
    e.preventDefault();

    switch(e.key)
    {
        case "ArrowLeft" : 
            move("left");
            break;

        case "ArrowRight" : 
            move("right");
            break;

        case "ArrowUp" : 
            move("up")
            break;

        case "ArrowDown" : 
            move("down");
            break;

        default:
            break;
    }
})



