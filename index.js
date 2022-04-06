const inputBtn = document.getElementById("input-btn");
myLeads = ["www","www1","www2",];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener( "click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++) {
    const element = myLeads[i];
    ulEl.innerHTML += "<li>" + element + "</li> "
    
}