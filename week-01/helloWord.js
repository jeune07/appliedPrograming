document.addEventListener('DOMContentLoaded', function() {
    let helloMessage = document.querySelector(".helloWord");
    
    // Check if the element exists before appending the paragraph
    if (helloMessage) {
        let pElement = document.createElement("p");
        pElement.innerText = "Hello World";
        helloMessage.appendChild(pElement);
    }
});
