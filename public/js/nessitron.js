$(document).ready(function() {
	console.log("ready called");
    initializePage();
    myStorage = window.sessionStorage;
});

function initializePage() {
	console.log("init page called");
    // console.log(document.cookie);
    $('.emotionListItem').click(feelingClick);
    $('#saveButton').click(saveClick);
    let data = sessionStorage.getItem('feeling');
    $('.usersEmotion').text(data);
    let journalData = JSON.parse(sessionStorage.getItem('journalArray')); // actually gettings this to append into things neatly per journal entry will take actual googling time, or some lazy free db and for each loop
    


    if(window.location.pathname == '/journal'){
        console.log("journal page");
        var cText = getCookie("username");
        // console.log(cText);
        if(cText=="Chris"){ //populating with garbage test data for users
            console.log("Chris detected");
            var htmlBlock =     '<li class="list-group-item list-group-item-action" aria-current="true">' +
                                    '<div class="d-flex w-100 justify-content-between">' +
                                    '<h2 class="mb-1" style="margin-top: 10px;" id="userDate">' + "3-9" +'</h2>'+
                                    '<h4 class="mb-1" id="userFeeling">' + "Hopeless" +'</h2>'+
                                    '</div>'+
                                    '<p class="mb-1" id="userJournal">' + "Today I woke up, did homework, then went to sleep." +'</p>' + '</li>' + '<br>';
            $("#journals").append(htmlBlock);
            htmlBlock =     '<li class="list-group-item list-group-item-action" aria-current="true">' +
                                    '<div class="d-flex w-100 justify-content-between">' +
                                    '<h2 class="mb-1" style="margin-top: 10px;" id="userDate">' + "3-10" +'</h2>'+
                                    '<h4 class="mb-1" id="userFeeling">' + "Happy" +'</h2>'+
                                    '</div>'+
                                    '<p class="mb-1" id="userJournal">' + "Dogs were finally declared better than cats" +'</p>' + '</li>' + '<br>';
            $("#journals").append(htmlBlock);
            htmlBlock =     '<li class="list-group-item list-group-item-action" aria-current="true">' +
                                    '<div class="d-flex w-100 justify-content-between">' +
                                    '<h2 class="mb-1" style="margin-top: 10px;" id="userDate">' + "3-11" +'</h2>'+
                                    '<h4 class="mb-1" id="userFeeling">' + "Resigned" +'</h2>'+
                                    '</div>'+
                                    '<p class="mb-1" id="userJournal">' + "Today I woke up, did homework, then went to sleep." +'</p>' + '</li>' + '<br>';
            $("#journals").append(htmlBlock);
        }
        if(journalData){
                for(i = 0; i<journalData.length; i+=4)
                {
                var htmlBlock =     '<li class="list-group-item list-group-item-action" aria-current="true">' +
                                    '<div class="d-flex w-100 justify-content-between">' +
                                    '<h2 class="mb-1" style="margin-top: 10px;" id="userDate">' + journalData[i] +'</h2>'+
                                    '<h4 class="mb-1" id="userFeeling">' + journalData[i+1] +'</h2>'+
                                    '</div>'+
                                    '<p class="mb-1" id="userJournal">' + journalData[i+3] +'</p>' + '</li>' + '<br>';
                    $("#journals").append(htmlBlock);
                }
                 
        } 
        else{
            console.log("No journals found, go have feelings pls");
        }
    }



    //Calendar Update
    if(window.location.pathname == '/calendarMonth') //Possibly the least ethical thing I've done outside of xbox live
    {

        var currentDate = new Date();
        var currDay = currentDate.getDate();
        $( "span" ).each(function(  ) { //For every span
            if ($(this).context.innerText.trim() == ""+currDay+"".trim()){ //if the number equals the current date
                // $(this).css('background-color',"#F3BD9D")
                return false; //this basically ensures we don't overlap, except during dates that won't happen until after the final is due. return false is break return true is continue
            }
            else //if it doesn't, basically do nothing
                var temp = 0;
        });
        var cText = getCookie("username");
        if (cText=="Chris"){
            $("#WOZ1").css('background-color', "#98C1D9")
            $("#WOZ2").css('background-color', "#85BAA1")
            $("#WOZ3").css('background-color', "#98C1D9")
        }
        $( "span" ).each(function(  ) {
            if (journalData){
                let emotionData = sessionStorage.getItem('emotion');
                var newDayColor;
                if (emotionData=='Enjoyment' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    $(this).css('background-color',"#85BAA1")
                    return false;
                }
                else if (emotionData=='Sadness' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    $(this).css('background-color', "#98C1D9")
                    return false;
                }
                else if (emotionData=='Fear' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {   
                    $(this).css('background-color', "#E0FBFC")
                    return false;
                }   
                else if (emotionData=='Anger' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {   
                    $(this).css('background-color', "#EE6C4D")
                    return false;
                }   
                else if (emotionData=='Disgust' && $(this).context.innerText.trim() == journalData[0].substring(2))
                {
                    $(this).css('background-color', "#DBF4A7")
                    return false;
                }
            }
        });
    }
}
function feelingClick(e) {
	sessionStorage.setItem('feeling', $(this).text());
    var emotion = ($("h1:first")).text();
    sessionStorage.setItem('emotion', emotion);
}
function saveClick(e) {
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate();
    let feeling = sessionStorage.getItem('feeling');
    let emotion = sessionStorage.getItem('emotion');
    var journalEntry = $('#journalEntryBox').val();
    let completeEntry = [date, feeling, emotion, journalEntry];
    let priorRecords = JSON.parse(sessionStorage.getItem('journalArray'));
    if(priorRecords){
        console.log("test1")
        priorRecords.push(date);
        priorRecords.push(feeling);
        priorRecords.push(emotion);
        priorRecords.push(journalEntry);
    }
    else{
        console.log("test2")
        priorRecords = [date, feeling, emotion, journalEntry];
    }
    sessionStorage.setItem('journalArray', JSON.stringify(priorRecords));
}
//STOLEN FROM W3SCHOOLS.COM 
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        // console.log("returning cookie text");
      return c.substring(name.length, c.length);
    }
  }
  return "";
}