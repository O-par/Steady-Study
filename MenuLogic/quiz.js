const guess = document.getElementById('timeup_answer');

const answer = document.querySelector("#answer");

var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// RANDOM START 

let length = contentArray.length;
let random = Math.floor(Math.random() * length);

var output = document.getElementById("demo2");

var definition_output = document.getElementById("demo3");

if(contentArray[0] != ''){
    definition_output.innerHTML = contentArray[random].my_question;
}


// RANDOM END


if(guess && (contentArray[0] != '')){
    guess.addEventListener('input', function handleChange(event) {

        if(event.target.value == contentArray[random].my_answer){
            output.innerHTML = ("You got it, the answer is: " + this.value + "✅");
        }else{
            output.innerHTML = ("Keep trying, you got this. 📚");
        } 
    });
}







