// Use the filter or find array methods to solve these problems


Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]


export function getAllDairy(arr) {
    let dairyArray = arr.filter(items => items.category === 'dairy');
    return dairyArray;
    }
    

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    let moreThan = arr.filter(items => items.category === 'fruit' && items.price > 2);
    return moreThan;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    return arr.find( items => items.id === 'cheese' );
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let allFruit = arr.filter(nameOfFruit => nameOfFruit.category === 'fruit');
    return allFruit.map(nameOfFruit => nameOfFruit.id);
    };
