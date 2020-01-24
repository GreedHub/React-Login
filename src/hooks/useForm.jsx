import {useState} from 'react'

function useForm(initialValue) {

    const [value,setValue] = useState({...initialValue, form:{isValid:false}});

    (()=>{

        let newState = {...value};

        Object.keys(newState).map(k=>{
   
            if(k === 'form'){
                return null;
            }

            newState[k]['isValid'] = (Array.isArray(newState[k].validation) 
            ? newState[k].validation.includes(newState[k].value)
            : newState[k].validation.test(newState[k].value) 
            );

            newState[k]['bind'] = {
                value: newState[k].value,
                error:!newState[k].isValid,
                name:k,
                onChange: e =>{
                    const name = e.target.name;
                    let newState = {...value};
                    let isFormValid = true;

                    newState[name].value = e.target.value;
                    newState[name].isValid = (Array.isArray(newState[name].validation) 
                        ? newState[name].validation.includes(newState[name].value)
                        : newState[name].validation.test(newState[name].value) 
                        );

                    Object.keys(newState).reduce((isFormValid,k)=>{
                        return k ==='form' ? isFormValid : isFormValid && newState[k].isValid;
                    });

                    newState.form.isValid = isFormValid;
                    setValue(newState);
                }
            }

             return null;
        });
        
    })();

    const reset = ()=>{
        setValue({...initialValue, form:{isValid:false}});
    }

    return [value,reset]
}

export default useForm