import React, {useState} from 'react'
import './login.scss';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useForm from '../../hooks/useForm';
import NativeSelect from '@material-ui/core/NativeSelect';


function Login() {

    const FORM = {
        username:{
            validation:/^[A-Za-z]{4,10}$/,
            value: '',
        },
        password:{
            validation:/^[A-Za-z]{4,10}$/,
            value: '',
        },
        list:{
            validation:['items','from','list'],
            value:''
        }
    }

    const [form,resetForm] = useForm(FORM);

    const [showPassword,setShowPassword] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        console.log(form);
        resetForm();
      };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <form onSubmit={onSubmit}>

            <TextField
                id="standard-error-helper-text"
                label="Username"
                helperText={!form.username.isValid ? "Invalid username" : "Insert a username"}
                {...form.username.bind}
            />
                            
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                {...form.password.bind}
                endAdornment={                
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />



            <InputLabel htmlFor="name-native-error">Name</InputLabel>
            <NativeSelect
            {...form.list.bind}>
            >
            {FORM.list.validation.map((option,index)=>{ return <option key={index} value={option}>{option}</option>})}
            </NativeSelect>

              <input type="submit"/>

        </form>
    )
}

export default Login