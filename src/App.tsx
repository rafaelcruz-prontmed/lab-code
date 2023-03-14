import './App.css'

import FormState from './components/FormState'
import FormRef from './components/FormRef'
import ReactHookForm from './components/ReactHookForm'

function App() {
  return (
    <div className="App">
      {/* <FormState /> */}
      {/* <FormRef /> */}
      <ReactHookForm />
    </div>
  )
}

export default App

// [x] Criar um form com os campos nome e descrição
// [ ] Dar um console.log nos valores dos campos ao dar submit
// [ ] Os campos devem ser obrigatórios
// [ ] Salvar os dados no localStorage