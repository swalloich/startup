//#region Global variables
    let polls = null;
//#endregion

function initiatePage()
{
    console.log("initiatePage called");
}

function showPollModal()
{
    $('#poll-add-modal').modal('show');
}

function closePollModal()
{
    $('#poll-add-modal').modal('hide');
}

function addPoll()
{
    const pollTitleElement = document.getElementById('poll-title');
    const pollSDateElement = document.getElementById('start-date');
    const pollSTimeElement = document.getElementById('start-time');
    const pollEDateElement = document.getElementById('end-date');
    const pollETimeElement = document.getElementById('end-time');
}