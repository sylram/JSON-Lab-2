var request = new XMLHttpRequest();

request.open('GET',"https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");
request.responseType='text';

request.onreadystatechange = function () {
    let data = request.responseText;

    let result = JSON.parse(data);
    var movieTitle ="";
    var releaseYear ="";
    var productionCompany ="";
 console.log(result)


    for (let i = 0; i <result["data"].length ; i++) {
        if(result['data'][i][10]== "Golden Gate Bridge") {
            movieTitle +="<li>"+ result['data'][i][8].replace(",","")+"</li>";
            releaseYear += "<li>"+ result['data'][i][9].replace(",","")+"</li>"
            productionCompany += "<li>"+result['data'][i][13]+"</li>";
        }
    }
    document.getElementById("result").innerHTML += movieTitle+ ", "+releaseYear+", "+productionCompany;

}
request.send();



// Golden_State_Bridge
//
// Udocument.getElementById('result').innerHTML += your_output;
//
// " to write the movie's info to the page.

// Append "<br>" to output code to create a new line