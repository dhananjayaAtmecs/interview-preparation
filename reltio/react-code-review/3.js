// incorrect key usage 

// Example: Incorrect Key Usage 


function ListItem(props) {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:
      <li key={value.toString()}>
        {value}
      </li>
    );
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Wrong! The key should have been specified here:
      <ListItem value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }


//   Example: Correct Key Usage 

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }