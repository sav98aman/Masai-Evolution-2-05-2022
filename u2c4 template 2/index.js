// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",matchdatafun)


var matchdata=JSON.parse(localStorage.getItem("schedule")) || []
function matchdatafun(){
    event.preventDefault()
    var matchobj={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    };
    matchdata.push(matchobj)
    // console.log(matchobj)

    localStorage.setItem("schedule",JSON.stringify(matchdata))
    console.log(JSON.parse(localStorage.getItem("schedule")))

    window.location.href="matches.html"
}
// console.log(JSON.parse(localStorage.getItem("schedule")))
