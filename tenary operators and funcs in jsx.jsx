// Tenary operators
// comparison? true: false
//E.g name == Bob ? "Yes, it is Bob" : "I don't know this person";
// let name = 'Joshua';
// name == 'Joshua'? console.log('hello bob'): console.log('hello, friend');

// E.g of function expression
// const getRandomNum = function() {
//     return Math.floor(Math.random() * 10) + 1
// } ;

//E.g of function declaration
// function getRandomNum() {
//     return Math.floor(Math.random() *10) + 1
// };


let ally = 'Bob';
ally == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');

function example(){
    return(
        <div className='heading'> 
            <h1>{Math.random()>0.5?'over 0.5': 'less than 0.5'}</h1>
        </div>
    )
}