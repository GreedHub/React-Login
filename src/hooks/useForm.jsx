import {useState} from 'react'

function useForm(initialValue) {

    const setInitialValue = (initialState)=>{

        let newState = initialState;

        Object.keys(newState).map(k=>{
   
            if(k === 'form'){
                return null;
            }

            newState[k]['hasBeenClicked'] = false;

            newState[k]['isValid'] = (newState[k]['hasBeenClicked']
            ? (Array.isArray(newState[k].validation) ? newState[k].validation.includes(newState[k].value) : newState[k].validation.test(newState[k].value))
            : true);

            newState[k]['bind'] = {
                value: newState[k].value,
                error:!newState[k].isValid,
                name:k,
                onClick: e=>{
                    setValue(updateForm(e))
                },
                onChange: e =>{
                    setValue(updateForm(e))
                }
            }

             return null;
        });

        return newState;
        
    };

    const updateForm = e =>{
        let newState = {...value};
        if(!e.target.name) return newState;
        let isFormValid = true;
        const name = e.target.name;
        newState[name].value = e.target.value;
        newState[name].hasBeenClicked = true;
        newState[name].isValid = (newState[name]['hasBeenClicked']                    
        ? (Array.isArray(newState[name].validation) ? newState[name].validation.includes(newState[name].value) : newState[name].validation.test(newState[name].value))
        : true);

        isFormValid = Object.keys(newState).reduce((isFormValid,k)=>{
            return k ==='form' ? isFormValid :  isFormValid && newState[k].isValid && newState[k].hasBeenClicked;
        });
        newState[name]['bind'].value = newState[name].value;
        newState[name]['bind'].error = !newState[name].isValid;
        newState.form.isValid = isFormValid;
        return newState;
    }

    const [value,setValue] = useState(setInitialValue({...initialValue, form:{isValid:false}}));

    const reset = ()=>{
        setValue(setInitialValue({...initialValue, form:{isValid:false}}));
    }

    return [value,reset]
}

export default useForm