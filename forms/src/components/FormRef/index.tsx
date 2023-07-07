import { useRef } from 'react'

// UNCONTROLLED INPUTS -> Porque não usa o state
function FormRef() {
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Nome: ', nameRef.current?.value)
    console.log('Descrição: ', descriptionRef.current?.value)
  }

  console.log('render!')

  return (
    <div className="App">
      <h1>FORM REF</h1>
      <h2>Olá {nameRef.current?.value}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
          ref={nameRef}
          type="text" 
          id='nome'
          name="nome"
          required
        />

        <br />
        
        <label>
          Descrição
          <input 
            ref={descriptionRef}
            type="text" 
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

export default FormRef