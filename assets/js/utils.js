export const customSelector = (selector, areAll) => {
    return areAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}

// Date Time 
export function Clock() {
    var date = new Date()
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.ampm = this.hours > 11 ? 'pm' : 'am';
    this.hours = this.hours > 12 ? this.hours - 12 : !this.hours ? 12 : this.hours;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
}
// Number 
export const randomIndex = arr => {
    return Math.floor(Math.random() * arr.length);

    // Code for Handle Duplicate Index

    // Way 1
    //  if (lastIndex === index) {
    //     if (lastIndex === colors.length - 1) {
    //         index = index - 1;
    //     } else {
    //         index = index + 1;
    //     }
    // }
    // Way 2
    // if(this.index === this.lastIndex) {    
    //     const indexes = [...colors].map((el,i) => i);          
    //     indexes.splice(this.index,1);
    //     this.index = indexes[randomIndex(indexes)]
    // }

}
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const getData1 = async url => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
export function getData2(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        callback(data)
    }
    xhr.open('get', url, true);
    xhr.send();
}
export async function getData3(url) {
    try {
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        var data = await response.json();
        // setColors(data); 
    } catch (err) {
        console.log('Wrong URL');
    }
    // getDataAsync(url);
}
// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error))
export function toggle(current, first, second) {
    if (current !== first) return first;
    else return second;
}
// Remove Item From Array
export const removeItem = (array, id) => {
    const filteredArray = array.filter((el => el.id !== id));
    return filteredArray;
}
