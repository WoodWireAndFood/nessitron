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
    $('#userDate').text(journalData[0]);
    $('#userFeeling').text(journalData[1]);
    $('#userJournal').text(journalData[2]);



    // console.log("test");
}

function feelingClick(e) {
	console.log("feelingClick called");
	// e.preventDefault();
	console.log("Your feeling is");
	console.log($(this).text());
	sessionStorage.setItem('feeling', $(this).text());
}
function saveClick(e) {
var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate();

let feeling = sessionStorage.getItem('feeling');

var journalEntry = $('#journalEntryBox').val();

let completeEntry = [date, feeling, journalEntry];

sessionStorage.setItem('journalArray', JSON.stringify(completeEntry));

}