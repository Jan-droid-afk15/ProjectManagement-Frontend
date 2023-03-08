import { useState } from 'react';
import axios from '../config';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

//Shorter version of Login
const LoginForm = (props) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const styles = { color: "red", backgroundColor:"white" };

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // console.log(`${name}: ${value}`);

        // setForm({
        //     [name]: value
        // });

        // setForm((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // });
        
        

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));

        
    };
    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!!`
                    }
                }));
            }
        });

        return error;
    };

    const submitForm = () => {
        if(!isRequired(['email', 'password'])){
        console.log("Email: ", form.email);
        console.log("Password: ", form.password);

        axios.post('/users/login', {
                email: form.email,
                password: form.password
            })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                props.onAuthenticated(true, response.data.token);
             })
             .catch((err) => {
                console.error(err);
                console.log(err.response.data);
                setErrors(err.response.data.errors);
             });
        }
    };

    // if(authenticated) return "You are logged in";

    return (
    <Container>
        <br></br>
        <Paper 
        sx={{
            width: 800,
            maxWidth: '100%',
            padding: 6,
            ml:25,
            filter: "blur(0.2px)",
            boxShadow: 4
          }}
        >
             <Typography sx={{ml:39, fontSize:33}}>Sign In</Typography>
             <br></br>
            <div>
            <TextField
            label="Email" 
            type="text" 
            name="email" 
            value={form.email} 
            onChange={handleForm}
            fullWidth
            error={errors.email}
            helperText={errors.email?.message}
            />
            </div>
            <br></br>
            <div>
            <TextField
            label="Password"
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleForm}
            fullWidth 
            error={errors.password}
            helperText={errors.password?.message}
            />
            </div>
            <br></br>
            <Button sx={{backgroundColor:"#F5EBE0" }} fullWidth variant="contained" onClick={submitForm}>Login</Button>
            <p style={styles}>{errorMessage}</p>
          
        </Paper>
        </Container>
    );
};

export default LoginForm;