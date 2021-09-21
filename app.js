const inputText = document.querySelector(".input-text");
const btnSubmit = document.querySelector(".btn-submit");
const outputText = document.querySelector(".output-text");

// console.log(inputText,btnSubmit,outputText);

function clickHandler(){
    const text = inputText.value;
    var url = frameUrl(text);
    // console.log(url);
    fetch(url)
    // .then(response => console.log(response))
    // .then(response => response.json())
    // .then(json => console.log(json))
    .then(response => {if(response.status===200){
            // console.log(response.json())
            return response.json();
        } else {
            console.log("Something went wrong");
        }
    })
    .then(json => console.log(json.contents.translated))
}

function frameUrl(text){
     var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text=" + text;
     return url;
}
btnSubmit.addEventListener("click",clickHandler)