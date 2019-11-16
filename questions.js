var questions = [
    {
        title: "The Constitutional Convention met in -",
        choices: ["New York", "Philadelphia", "Washington D.C.", "Boston"],
        answer: "Philadelphia"
    },

    {
        title: "The number of main branches in our Government Is:",
        choices: ["6", "21", "7", "3"],
        answer: "3"
    },

    {
        title: "The Legislative Branch of our goverment is called:",
        choices: ["The Cabinet", "Congress", "Supreme Court", "The Presidency"],
        answer: "Congress"
    },

    {
        title: "The number of amendments that were originally added to the COnsitution in 1791 is:",
        choices: ["3", "1", "10", "13"],
        answer: "10"

    },

    {
        title: "The Unites States first Constitution was called:",
        choices: ["The Articles of Confederation", "The Declaration of Indeendence", "The Emancipation Proclamations", "Magna Carta"],
        answer: "The Articles of Confederation"
    }
];

function showquestions () { 
        // This is the container that will contain all the buttons
    // var buttonContain = document.getElementById("buttons");
    var buttonContain = $("#buttons");

    var titleDiv = $("#title").text(questions[0].title);

    // For every choice make a button and then append it to the container
    for (var i = 0; i < questions[0].choices.length; i++) {

        // For each drink in the array, we create a new paragraph to hold that text.
        // A new paragraph will be created with each iteration of the loop.
        // var button = document.createElement("button");
        var button = $("<button>")

        // We then assign the the text of this paragraph to be the text in the array.
        button.text(questions[0].choices[i])

        // We then add the paragraph to the our main div on the page ("#drink-options")
        buttonContain.append(button);
    }
}

showquestions()

/**
 * Break this down into steps
 * show the title, generate five buttons
 * click listener, tell when buttons are clicked, check if answer is correct or not, afterwards show next question
 * If all the questions are done, show the score
 * maybe for each question
 */

 