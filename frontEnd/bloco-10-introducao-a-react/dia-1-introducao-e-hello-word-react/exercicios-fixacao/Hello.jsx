// Para fixar, crie um elemento JSX que recebe o valor “Hello, JSX” de uma constante chamada textJSX, e o incorpore em uma tag h1 . Para esse exercicio, vamos desconsiderar o fato de não ter a pasta do react. Podemos fazer no codesandbox

import React from "react";

class App extends React.Component {
  render () {
    const textJSX = "Hello, JSX";
    const ElementH1 = <h1>{textJSX}</h1>;
    
    return (
      <div className="App">{ElementH1}</div>
      )   
}
}
  
export default App;