import { useState, ChangeEvent, SyntheticEvent } from 'react'

// CONTROLLED INPUTS -> Porque usa o state
function FormState() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(name)
    console.log(description)
  }

  console.log('render!')

  return (
    <div className="App">
      <h1>FORM STATE</h1>
      <h2>Olá {name}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
          type="text" 
          id='nome'
          name="nome"
          value={name} 
          onChange={handleNameChange} 
          required
        />

        <br />
        
        <label>
          Descrição
          <input 
            type="text" 
            value={description} 
            onChange={handleDescriptionChange} 
            required
          />
        </label>

        <br />

        <button type='button'>Cancelar</button>
        <button>OK</button>
      </form>
    </div>
  )
}

export default FormState
