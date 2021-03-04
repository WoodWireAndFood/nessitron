$(document).ready(function() {
	console.log("ready called");
    initializePage();
    myStorage = window.sessionStorage;
});

function initializePage() {
	console.log("init page called");
    $('.emotionListItem').click(feelingClick);
    $('#saveButton').click(saveClick);
    let data = sessionStorage.getItem('feeling');
    $('.usersEmotion').text(data);
    let journalData = JSON.parse(sessionStorage.getItem('journalArray')); // actually gettings this to append into things neatly per journal entry will take actual googling time, or some lazy free db and for each loop
    


    if(window.location.pathname == '/journal'){
        console.log("journal page");
        if(journalData){
                for(i = 0; i<journalData.length; i+=4)
                {
                var htmlBlock =     '<a href="#" class="list-group-item list-group-item-action" aria-current="true">' +
                                    '<div class="d-flex w-100 justify-content-between">' +
                                    '<h2 class="mb-1" style="margin-top: 10px;" id="userDate">' + journalData[i] +'</h2>'+
                                    '<h4 class="mb-1" id="userFeeling">' + journalData[i+1] +'</h2>'+
                                    '</div>'+
                                    '<p class="mb-1" id="userJournal">' + journalData[i+3] +'</p>' + '</a>' + '<br>';
                    $("#journals").append(htmlBlock);
                }
                 
        } 
        else{
            alert("No journals found, go have feelings pls");
        }
    }



    //Calendar Update
    if(window.location.pathname == '/calendarMonth') //Possibly the least ethical thing I've done outside of xbox live
    {
        var currentDate = new Date();
        var currDay = currentDate.getDate();
        $( "span" ).each(function(  ) { //For every span
            if ($(this).context.innerText.trim() == ""+currDay+"".trim()){ //if the number equals the current date
                // console.log(currDay);
                // console.log($(this).context.innerText.trim());
                $(this).css('background-color',"#F3BD9D")
                return false; //this basically ensures we don't overlap, except during dates that won't happen until after the final is due. return false is break return true is continue
            }
            else //if it doesn't, basically do nothing
                var temp = 0;
        });
        $( "span" ).each(function(  ) {
            if (journalData){
                let emotionData = sessionStorage.getItem('emotion');
                // let emotionDayNumber = sessionStorage.getItem('journalArray'); 
                // console.log(journalData[0].substring(2));
                var newDayColor;
                // console.log("Your most recent emotion was " + emotionData);
                if (emotionData=='Enjoyment' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    // console.log("Enjoyment found");
                    $(this).css('background-color',"#85BAA1")
                    return false;
                    // newDayColor = "#85BAA1"
                }
                else if (emotionData=='Sadness' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    // console.log("Sadness found");
                    $(this).css('background-color', "#98C1D9")
                    return false;
                }
                else if (emotionData=='Fear' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {   
                    // console.log("Fear found");
                    $(this).css('background-color', "#E0FBFC")
                    return false;
                }   
                else if (emotionData=='Anger' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {   
                    // console.log("Anger found");
                    $(this).css('background-color', "#EE6C4D")
                    return false;
                }   
                else if (emotionData=='Disgust' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    // console.log("Disgust found");
                    $(this).css('background-color', "#DBF4A7")
                    return false;
                }
                // console.log("The color for that emotion is: " + newDayColor);
            }
        });
    }
}
function feelingClick(e) {
	console.log("Your feeling is " + $(this).text());
	sessionStorage.setItem('feeling', $(this).text());
    var emotion = ($("h1:first")).text();
    console.log("Your emotion is " + emotion);
    sessionStorage.setItem('emotion', ($("h1:first")).text())
}
function saveClick(e) {
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate();
    let feeling = sessionStorage.getItem('feeling');
    let emotion = sessionStorage.getItem('emotion');
    var journalEntry = $('#journalEntryBox').val();
    let completeEntry = [date, feeling, emotion, journalEntry];
    // var priorRecords = sessionStorage.getItem('journalArray');
    //let journalData = JSON.parse(sessionStorage.getItem('journalArray'));
    let priorRecords = JSON.parse(sessionStorage.getItem('journalArray'));
    // console.log(priorRecords);
    if(priorRecords){
        console.log("test1")
        // priorRecords.push(date, feeling, emotion, journalEntry);
        priorRecords.push(date);
        priorRecords.push(feeling);
        priorRecords.push(emotion);
        priorRecords.push(journalEntry);
    }
    else{
        console.log("test2")
        priorRecords = [date, feeling, emotion, journalEntry];
    }
    // console.log(priorRecords);
    sessionStorage.setItem('journalArray', JSON.stringify(priorRecords));
}