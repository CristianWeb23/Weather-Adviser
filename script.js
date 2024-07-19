const temp = document.getElementById("temp");
const items = document.getElementById("listItems");


function Check(){
    if(temp.value >= 40){
        let li = document.createElement("li");
        li.innerHTML = "It's burning outside. You should just stay indoors.";
        items.appendChild(li);
    }
    else if(temp.value === ''){
        alert("Please enter a value");
    }
    else if(temp.value <= 19){
        let li = document.createElement("li");
        li.innerHTML = "It's freezing outside. Yous should wear thick clothes if you want to go out to warm you up.";
        items.appendChild(li);
    }
    else if(temp.value >= 20 || temp.value <=39 ){
        let li = document.createElement("li");
        li.innerHTML = "It's a perfect day to go outside and breathe in some fresh air.";
        items.appendChild(li);
    }
    else{
        alert("You should only enter a valid temperature. Try again with a proper value this time or I will personaly kill you myself.")
    }
    temp.value = "";
    setTimeout(function delay(){
        items.parentNode.removeChild(items);
    }, 5000);
}