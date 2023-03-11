class Poll
{
    #title = null;
    #startDate = null;
    #endDate = null;
    #questions = null;

    constructor(pollTitle)
    {
        this.setStartDate(new Date());
        this.setEndDate(new Date());
        this.#questions = [];
    }

    getTitle()
    {
        return this.#title;
    }

    setTitle(pollTitle)
    {
        if (pollTitle instanceof String || typeof(pollTitle) == 'string')
        {
            this.#title = pollTitle;
            return true;
        }
        return false;
    }

    getStartDate()
    {
        return this.#startDate;
    }

    /**
     * Setter for the start date of the poll.
     * @param {Date} date a date object representing the start date of the poll
     * @return returns true if setting the date was successful. False otherwuse
     */
    setStartDate(date)
    {
        if (date instanceof Date)
        {
            this.#startDate = date;
            return true;
        }
        return false;
    }

    getEndDate()
    {
        return this.#endDate;
    }

    /**
     * Setter for the end date of the poll.
     * @param {Date} date a date object representing the end date of the poll
     * @returns returns true if setting the date was successful. False otherwise
     */
    setEndDate(date)
    {
        if (date instanceof Date)
        {
            this.#endDate = date;
            return true;
        }
        return false;
    }

    getQuestions()
    {
        return this.#questions;
    }

    pushQuestion(question)
    {
        if (question instanceof Question)
        {
            this.#questions.push(question);
            return true;
        }
        return false;
    }

    popQuestion(question)
    {
        if (question == null)
        {
            return this.#questions.pop();
        }
        
    }
}

class Question
{
    #questionText = null;
    #questionType = null;
    #options = null;

    constructor(questionText, questionType, options)
    {
        this.setQuestionText(questionText);
        this.setQuestionType(questionType);
    }
    
    getQuestionText()
    {
        return this.#questionText;
    }

    /**
     * Sets the text that will be displayed for the question
     * @param {String} questionText the question text to be set.
     * @returns returns true if setting the question was successful. False otherwise
     */
    setQuestionText(questionText)
    {
        if (questionText instanceof String || typeof(questionText) == 'string')
        {
            this.#questionText = questionText;
            return true;
        }
        return false;
    }

    getQuestionType()
    {
        return this.#questionType;
    }

    setQuestionType(questionType)
    {
        if ((questionType instanceof String || typeof(questionType) == 'string') &&
            (questionType == 'checkbox' || questionType == "radio" ||
             questionType == 'short-answer'))
        {
            this.#questionType = questionType;
            return true;
        }
        return false;
    }

    getOptions()
    {
        return this.#options;
    }

    /**
     * Set the current options array to the one provided.
     * @param {Array} options An array of strings to replace the options array.
     * @returns Returns true if the current options array was successfully replaced
     *          by the one provided. False otherwise
     */
    setOptions(options)
    {
        if (options instanceof Array)
        {
            let newOptions = [];
            let optionsAdded = false;
            for(const item in options)
            {
                if (item instanceof String || typeof(item) == 'string')
                {
                    newOptions.push(item);
                    optionsAdded = true;
                }
            }
            
            if (optionsAdded)
                this.#options = newOptions;
            return optionsAdded;
        }
        return false;
    }

    pushOption(option)
    {
        if (option instanceof String || typeof(option) == 'string')
        {
            this.#options = option;
            return true;
        }
        return false;
    }

    /**
     * option can be a number, a string, or null. a number removes the object at the
     * provided index and returns it. String searches for a matching option, removes
     * it from the options array if found, and returns it. Null removes the item from
     * the end of the options array and returns it.
     * @param {*} option An optional parameter representing the item to be removed.
     *            See method description for details.
     * @returns Returns the item found in the array. If the item was not found, or an
     *          invalid parameter was given, returns false.
     */
    popOption(option)
    {
        if (!(option instanceof String || typeof(option) == 'string' ||
              option instanceof Number || typeof(option) == 'number' ||
              option == null))
        {
            return false;
        }
        else if (option == null)
        {
            return this.#options.pop();
        }
        else if (option instanceof Number || typeof(option) == 'number')
        {
            if (option > this.#options.length - 1)
                return false;
            let newOptions = [];
            let popped = false;
            for (let i = 0; i < this.#options.length; i++)
            {
                if (i == option)
                    popped = this.#options[i];
                else
                    newOptions.push(this.#options[i]);
            }
            this.#options = newOptions;
            return popped;
        }
        else
        {
            let newOptions = [];
            let popped = false;
            for (const questionOption of this.#options)
            {
                if (questionOption == option)
                    popped = questionOption;
                else
                    newOptions.push(questionOption);
            }
            this.#options = newOptions;
            return popped;
        }
    }

    /**
     * Determines if the current Question object matches the one provided.
     * @param {Question} question The 
     * @returns Returns true if all member variables match. If they don't match, or
     *          an invalid object was provided to the method, returns false.
     */
    equals(question)
    {
        let qMatch = true;
        for (let i = 0; i < this.#options.length; i++)
        {
            if (this.#options[i] != question.getOptions()[i])
            {
                qMatch = false;
                break;
            }
        }

        return (this.#questionText == question.getQuestionText() &&
                this.#questionType == question.getQuestionType() &&
                qMatch);
    }
}