// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


Input:
 [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let newArray = [];
    arr.forEach(element => { 
    newArray.push(element.name);     
})

    return newArray; 

}        


/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let backwards = [];
    arr.forEach(element => {
        backwards.push(element.type);
        
    })
    return backwards.reverse();
}

    /*
    Output:

    [
        { nombre: 'spot', tipo: 'dog' },
        { nombre: 'rover', tipo: 'dog' },
        { nombre: 'jumpy', tipo: 'frog' },
        { nombre: 'einstein', tipo: 'cat' },
    ]
    */

export function makeSpanishLanguageArray(arr) {
    let spanish = [];
    arr.forEach(element => {
    spanish.push({nombre: element.name, tipo: element.type});
    
    })
    return spanish;
}