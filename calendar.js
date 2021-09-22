const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let daysContainer = document.getElementById('days')
const monthDaysCount = 31;
const names = ["Smith", "Jane", "Peter", "Paul", "Jones", "Chong", "Alex", "Adrien"];
const types = ["Take-away", "Eat-in"]
let orders = []

for (let day of days) { // generate days as header's items
    daysContainer.innerHTML += `<th>${day}</th>`;
}

let rowCount = 1;
for (let i = 1; i <= 7 * 5; i++) { // table cells count
    let currentRow = document.getElementById(`row${rowCount}`);
    if (i % 7 == 0) rowCount++;
    let innerHTML = "";
    innerHTML += `<td id="day${i}">`;
    if (i <= monthDaysCount) { // January days count
        let random = Math.floor(Math.random() * 1000)
        orders.push({ // data entry
            name: names[random % names.length],
            type: types[random % types.length]
        })
        let order = orders[i - 1]; // array starts at 0. not 1!
        innerHTML += `
        <span class="day">${(i<= monthDaysCount)? i: ''}</span>
        <span class="type">${order.type}</span>`;
        if (order.name) innerHTML += `<span class="name">(${order.name})</span>`;
    }
    innerHTML += '</td>';
    currentRow.innerHTML += innerHTML
}