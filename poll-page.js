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
    questionAnswers.forEach(elem => {
        if (elem.value != '')
        {
            answers.push(elem.value);
        }
    });

    // TODO add poll date related functionalities

    let pollQuestion = new Question(pollQuestionTitle, 'radio', answers);
    let newPoll = new Poll();
    newPoll.pushQuestion(pollQuestion);
    polls.push(newPoll);

    updatePollList();
}

function updatePollList()
{

}