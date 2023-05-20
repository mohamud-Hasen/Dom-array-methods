const main = document.getElementById('main');
const addUserBnt = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth'); 

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and money

 async function getRandomUser() {
    const res = await  fetch('https://randomuser.me/api/');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    addData(newUser);


}

//add new obj to data array
function addData(obj){
    data.push(obj);

    updatDOM()
}

//update DOM

function updatDOM(providedData = data){
    //clear main div
   main.innerHTML = ' <h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element)
    })
}