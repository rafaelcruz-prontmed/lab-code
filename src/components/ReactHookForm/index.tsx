import { useForm, Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData ={
  name: string;
  description: string;
}

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required().min(3),
  description: yup.string().required(),
}).required();

function ReactHookForm() {
  const {
    register, 
    setValue, 
    handleSubmit, 
    formState: {errors}, 
    reset, 
    resetField,
    control,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: ''
    }
  });
  
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log('render!')

  return (
    <div className="App">
      <h1>REACT HOOK FORM</h1>

      <form onSubmit={onSubmit}>
        <label>Nome</label>
        <input {...register('name')} />
        {errors.name?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
        {errors.name?.type === 'min' && (
          <p role="alert">Mínimo de 3 letras</p>
        )}

        <br />

        <label>Descrição</label>

        <Controller 
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <input 
              value={value} 
              onChange={(e) => {
                const masked = e.target.value.replace(/a/g, 'x')
                e.target.value = masked;
                onChange(e);
              }} 
            />
          )}
        />
        {errors.description?.type === 'required' && (
          <p role="alert">Description is required</p>
        )}

        <br />

        <button type="button" onClick={() => { setValue('name', 'Fulano') }}>
          Mudar nome
        </button>

        <button type="button" onClick={() => { reset() }}>
          Limpar
        </button>
        
        <button>OK</button>
      </form>
    </div>
  )
}

export default ReactHookForm
