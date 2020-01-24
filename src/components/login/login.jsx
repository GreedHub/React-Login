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
import Select  from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';



export default function Login() {

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
        if(form.status.isValid){
            resetForm();
        }
      };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const useStyles = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

      const classes = useStyles();


    return (
        <form onSubmit={onSubmit}>

            <TextField
                id="standard-error-helper-text"
                label="Username"
                helperText={!form.username.isValid ? "Invalid username" : "Insert a username"}
                {...form.username.bind}
            />

            <FormControl className={classes.formControl}>
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
                {form.password.isValid ? <FormHelperText>Enter a password</FormHelperText> : <FormHelperText>Please enter a valid password</FormHelperText>}
            </FormControl>


            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                List
                </InputLabel>
                <Select {...form.list.bind}>   
                    <option value=""></option>
                    {FORM.list.validation.map((option,index)=>{ return <option key={index} value={option}>{option}</option>})}ç
                </Select>
                <FormHelperText>Please select an element of the list</FormHelperText>
            </FormControl>

            <input type="submit"/>

        </form>
    )
}