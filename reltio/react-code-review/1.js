// Invalid Hook Call Warning 


function Bad1() {
  function handleClick() {
    // 🔴 Bad: inside an event handler (to fix, move it outside!)    
	const theme = useContext(ThemeContext);  }
  // ...
}

function Bad2() {
  const style = useMemo(() => {
    // 🔴 Bad: inside useMemo (to fix, move it outside!)    
	const theme = useContext(ThemeContext);    
	return createStyle(theme);
  });
  // ...
}

class Bad3 extends React.Component {
  render() {
    // 🔴 Bad: inside a class component   
	 useEffect(() => {})   
 // ...
  }
}
