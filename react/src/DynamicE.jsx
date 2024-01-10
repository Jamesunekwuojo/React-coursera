function DynamicE() {
    function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum)
    let userInput = prompt("Enter a random number:");
    alert(`Computer number: ${randomNum} Your guess no is ${userInput}`)
      
    }
    
  
  
    return (
      <div>
        <h1>Task: Add a button and handle a click event</h1>
  
        <button onClick={handleClick}>Guess a number betweeen 1 and 3</button>
        
      </div>
    );
  }
  
  export default DynamicE;
  