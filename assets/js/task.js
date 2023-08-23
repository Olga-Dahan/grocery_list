var groceryList = [];  
// loadData(); 


function loadProduct() {

    var url = document.getElementById("imageURL").value;      
    var name = document.getElementById("productName").value;     
    var quantity = document.getElementById("quantity").value;   

    
    var data = new Object();
    data.url = url;
    data.name = name;
    data.quantity = quantity;

    groceryList.push(data);

    createTable();
    // saveData();
    
    document.getElementById("myForm").reset();

}

function createTable() {

    var data = document.getElementById("data");                     

    
    var info = "";

    for (var index = 0; index < groceryList.length; index++) {
        info += `
        <tr>
            <td><img src="${groceryList[index].url}"></td>
            <td>${groceryList[index].name}</td>
            <td>${groceryList[index].quantity}</td>
        </tr>
    `
    }

    data.innerHTML = info;
}

function clearTable() {
    document.getElementById("data").innerHTML = "";
    taskList = [];
}

function removeLast() {
    groceryList.pop();
    createTable();
}

// function loadData() {
//     groceryList = JSON.parse(localStorage.getItem("grocery"));
//     createTable();
// }

// function saveData() {
//     localStorage.setItem("grocery", JSON.stringify(groceryList));
// }

