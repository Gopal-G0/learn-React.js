import { useState } from 'react'
// function Hello(props) {

//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old

//       </p>
//     </div>
//   );
// }

function App() {

  const [count, setCount] = useState(0);

  // setTimeout(
  //   () => setCount(count + 1),
  //   1000
  // )

  const handleClick = () => {
    setCount(count => count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  // console.log('rendering...',count)

  return (
    <div>
      <div>
        {count}
        <br />
        <button onClick={handleClick}>
          plus
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );

  // const friends = [ 'Peter', 'Maya']

  // return (
  //   <p>{friends}</p>
  // );

  // const friends = [
  //   { name: 'Peter', age: 4},
  //   { name: 'Maya', age: 10},
  // ]

  // return (
  //   <div>
  //     <p>{friends[0].name} {friends[0].age}</p>
  //     <p>{friends[1].name} {friends[1].age}</p>
  //   </div>
  // );

  // const name = 'Peter'
  // const age = 10

  // return (
  //   <div>
  //     <h1>Greeting</h1>
  //     <Hello name='Gopal' age={26+10}/>
  //     <Hello name={name} age={age}/>
  //   </div>
  // );

  // const now = new Date()
  // const a = 25
  // const b = 20
  // console.log(now, a+b)
  // return (
  //   <div>
  //     <p>Hello World, it is {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a+b}
  //     </p>
  //   </div>
  // );
}

export default App
