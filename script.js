let data;
populateSports();


function getSportSelected()
{
    let selectedSport = document.querySelector("#sportList").selectedIndex;
    console.log(selectedSport);

    const request = new XMLHttpRequest();
    request.open("GET",  "https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=bfbf9378d9a5c0f7d7889dab28d7b64a", true);

    let selectedDescription = data[selectedSport].id;
    document.querySelector("#sportDescription").innerHTML += selectedDescription;
    
    
    

}


function populateSports()
{
    const request = new XMLHttpRequest();

    request.open("GET",  "https://api.the-odds-api.com/v4/sports/?apiKey=bfbf9378d9a5c0f7d7889dab28d7b64a", true);

    request.onload = function() {
        data = JSON.parse(this.response); // request.response

        if(request.status == 200)
        {
            console.log("Response OK");
            
            data.forEach(
                sport => 
                {
                    let sportOption = document.createElement('option');
                    let sportText = document.createTextNode(sport.title);
                    sportOption.appendChild(sportText);
                    document.querySelector("#sportList").appendChild(sportOption);
                }
            );
        }
        else
        {
            console.log(`Error occured: Status: ${request.status}`);
        }
    };

    request.send();
}