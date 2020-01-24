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


function Login() {

    const FORM_VALIDATION = {
        username:{
            validation:/^[A-Za-z]{4,10}$/,
            value: '',
        },
        password:{
            validation:/^[A-Za-z]{4,10}$/,
            value: '',
        },
    }

    const [form,resetForm] = useForm(FORM_VALIDATION);

/*     const [username,isValidUsername,bindUsername,resetUsername] = useInput('',/^[A-Za-z]{4,10}$/);
    const [password,isValidPassword,bindPassword,resetPassword] = useInput('',/^[A-Za-z]{4,10}$/); */
    const [showPassword,setShowPassword] = useState(false);

    const onSubmit = values => {
        console.log({
            form
        });
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
                name="username"
                {...form.username.bind}
            />
                            
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                name="password"
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

            <input type="submit"/>

        </form>
    )
}

export default Login