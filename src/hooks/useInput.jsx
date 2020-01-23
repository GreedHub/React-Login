import {useState} from 'react'

function useInput(initialValue,validationRegex) {

    const [value,setValue] = useState(initialValue);
    
    const [isValid,setValidation] = useState(true);

    const reset = ()=>{
        setValue(initialValue);
    }

    const bind = {
        value,
        error:!isValid,
        onChange: e =>{
            setValue(e.target.value);
            setValidation(validationRegex.test(value) ? true : false);
        }
    }

    return [value,isValid,bind,reset]
}

export default useInput
