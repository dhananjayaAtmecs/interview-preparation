// Nested components 


function MainComponent() {
    let [name, setName] = useState("");
    
    const childComponent = () => {
      return <h1>Hello {name}, I'm the child!</h1>
    }
    
    return (
      <div>
        <childComponent />
      </div>
    )
  }

//   It makes sense after all, since childComponent is not going to be used outside of 
//   MainComponent and it can already use the name state variable without having to receive 
//   it as a prop. However, this nesting of functions actually generates a small performance 
//   issue.
  
//   You see, every time your MainComponent component is called (i.e rendered), 
//   it’ll re-create the childComponent component’s definition. So it’ll keep on declaring 
//   the same function over and over again on every execution. Mind you, if you’re not doing 
//   this everywhere, it might be a small issue that you might not even notice affecting your 
//   performance. However, left unchecked, this is a terrible practice.
  
