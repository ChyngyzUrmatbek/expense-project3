import './FormInput.css'
const FormInput = ({id,LableName,inputType,placeholder,...rest})=>{
    return(
        <div className='form-input' >
            <label htmlFor={id}>{LableName}</label>
            <input className='input' placeholder={placeholder || '...'} id={id} type={inputType} {...rest}/>
        </div>
    )
}

export default FormInput