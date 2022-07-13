// function which takes array with values of type 
// string or number and return the same type of value
const last = <T>(arr: T[] ): T =>{
    return arr[arr.length-1]
}


const one = last( [ 5, 10, 3, 22 ] );

const two = last<string>( [ 'demo', 'hello', 'not-hello' ] )


// function to take a value of type string or number 
// and return array of the same type
const arrayOfType = <T, U> ( x: T, y: U): [T, U] =>{
    return [ x, y ]
}

const numberArray = arrayOfType<number, string>(5, 's');
const stringArray = arrayOfType<string, string>('a', 'raw');



// write a function to accept object and return new object
// also make two properties of the object mandatory.
const makeFullName = < T extends { firstName: string; lastName: string} > (
obj: T
)=>{
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

const fullName = makeFullName({ firstName: 'dhanu', lastName: 'reddy', age: 18 });
// const fullName1 = makeFullName({ name: 'dhanu', lastName: 'reddy', age: 18 })



// generics inside interface
interface Tab<T> {
   id: string;
   position: number;
   data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;





// useing generics with react
import react from 'react';

interface Props {
    name: string
}

const HelloWorld: react.FC<Props> =({ name })=>{
    const [ state, setState ] = 
    useState<{ fullName: string | null }>({ fullName: "" });
    state.fullName

    return <div>hello {name}</div>;
}



import react from 'react';

interface FormProps {
    values: T;
    children: (values: T) => JSX.Element
}

const Form=<T extends {}>({values, children}: FormProps<T>)=>{
    return children(values)
}



import react from 'react';


const App: react.FC =()=>{
  return <div>
     <Form<{ firstName: string | null}> values={{ firstName: "bob" }}> 
        { (values)=> <div>{values.firstName}</div> } 
     </Form>
  </div>
}
