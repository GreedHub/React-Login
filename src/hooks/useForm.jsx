import {useState} from 'react'

function useForm(initialValue) {

    const [value,setValue] = useState({...initialValue, form:{isValid:false}});

    (()=>{

        let newState = {...value};

        for(let k in newState){
            if(k === 'form'){
                continue;
            }

            newState[k]['isValid'] = newState[k].validation.test(newState[k].value) ? true : false;
            newState[k]['bind'] = {
                value: newState[k].value,
                error:!newState[k].isValid,
                onChange: e =>{
                    const name = e.target.name;
                    let newState = {...value};
                    let isFormValid = true;

                    newState[name].value = e.target.value;
                    newState[name].isValid = newState[name].validation.test(newState[name].value) ? true : false;

                    for(let k in newState){
                        if(k==='form') continue;
                        isFormValid = isFormValid && newState[k].isValid;
                    }
                    newState.form.isValid = isFormValid;
                    setValue(newState);
                }
            }
            
        }
    })()

    /* 
        {
            user:{
                validation:regexp || ['value1','value2','valueN'],
                isValid: boolean,
                value: '',
                bind:
            },
            password:{
                validation:regexp || ['value1','value2','valueN'],
                isValid: boolean,
                value: '',
                bind:!value.user.isValid
            },
            form:{
                isValid:boolean
            }
        }
    */

    const reset = ()=>{
        setValue({...initialValue, form:{isValid:false}});
    }


    return [value,reset]
}

export default useForm
