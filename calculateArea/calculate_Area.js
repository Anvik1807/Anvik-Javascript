let length;
let width;
let groc_one;
let groc_two;
let groc_three;
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 console.log(`length is: ${length}`);
let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGroceryTracker() {
    groc_one = parseFloat(document.getElementById('groc_one').value);
    groc_two = parseFloat(document.getElementById('groc_two').value);
    groc_three = parseFloat(document.getElementById('groc_three').value);
    let result_groc = groc_one + groc_two + groc_three;
    document.getElementById('grocery-result').innerText = `The groc amount is: ${result_groc}`;

}