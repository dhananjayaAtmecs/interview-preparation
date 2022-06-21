// If an event handler only takes a single argument for 
// the Event object, you can just provide the function as 
// the event handler like this: onChange={handleChange}. 
// You don't need to wrap the function in an anonymous 
// function like this: onChange={e => handleChange(e)}.

// Bad example: 

<input id="name" value={inputValue} onChange={e => handleChange(e)} />

// good example 

<input id="name" value={inputValue} onChange={handleChange} />
