//#region Global variables
    let polls = null;
//#endregion

function initiatePage()
{
    polls = [];
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
    const pollQuestionTitleElement = document.getElementById('question-title1');
    const questionAnswers = document.getElementsByClassName('question-answer');

    let pollQuestionTitle = pollQuestionTitleElement.value;
    let answers = [];
    for (let item of questionAnswers)
    {
        if (item.value != '')
        {
            answers.push(item.value);
        }
    }

    // TODO add poll date related functionalities

    let pollQuestion = new Question(pollQuestionTitle, 'radio', answers);
    let newPoll = new Poll(pollTitleElement.value);
    newPoll.pushQuestion(pollQuestion);
    polls.push(newPoll);

    // TODO add validation for form fields
    updatePollList();
    closePollModal();
}

function updatePollList()
{
    // clean list
    const pollsListItems = document.getElementsByClassName('poll-list-item');
    for (let item of pollsListItems)
    {
        item.parentElement.removeChild(item);
    }

    // build list rows
    const pollsList = document.getElementById('polls-list');
    let newRow = null;

    polls.forEach(pollItem => {
        console.log(pollItem instanceof Poll)
        newRow = document.createElement('div');
        newRow.classList.add('list-group-item', 'poll-list-item');
        newRow.innerHTML = `${pollItem.getTitle()} | ${pollItem.getQuestions().length} questions`;
        pollsList.appendChild(newRow);
    });

    /*for (let pollItem in polls)
    {
        console.log(pollItem instanceof Poll)
        newRow = document.createElement('div');
        newRow.classList.add('list-group-item', 'poll-list-item');
        newRow.innerHTML = `${pollItem.getTitle()} | ${pollItem.getQuestions().length} questions`;
        pollsList.appendChild(newRow);
    }*/
}