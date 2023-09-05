import './App.css';
import { Component } from 'react';
class App extends Component {
  
  state={
    estudantes:[
      {
        
        nome: "João Pedro",
        matricula: 11111111,
        curso: "Info para Internet",
        turma: "6D"
      },
      {
        
        nome: "Geovani Michels",
        matricula: 22222222,
        curso: "Info para Internet",
        turma: "6D"
      },
      {
        nome: "Guilherme Faria",
        matricula: 33333333,
        curso: "Info para Internet",
        turma: "6D"
      }
    ]  
  }
  render(){
    const{estudantes} = this.state;//atribuição via desestruturação
    return(
      <div>
        {estudantes.map(estudante => (
       <div key={estudante.matricula}>
          <h1> {estudante.nome} </h1>
          <p>{estudante.matricula}</p>
          <p>{estudante.curso}</p>
          <p>{estudante.turma}</p>
       </div>
      ))}  
    </div>
    )
  }
}

export default App;
