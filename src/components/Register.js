import { useState } from 'react';
import axios from '../config';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const RegisterForm = (props) => {
    const [form, setForm] = useState({
        name:"",
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

    const submitForm = () => {
        console.log("Email: ", form.email);
        console.log("Password: ", form.password);

        axios.post('/users/register', {
                name: form.name,
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
                setErrorMessage(err.response.data.message);
             });
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
          
          }}>
            <Typography sx={{ml:38, fontSize:33}}>Sign Up</Typography>
             <br></br>
            <div>
            <TextField
            label="Name" 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleForm}
            fullWidth
        
            />
            </div>
     
            <br></br>
            <div>
            <TextField
            label="Email" 
            type="text" 
            name="email" 
            value={form.email} 
            onChange={handleForm}
            fullWidth
        
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
            />
            </div>
            <br></br>
            <Button sx={{backgroundColor:"#F5EBE0" }} fullWidth variant="contained" onClick={submitForm}>Register</Button>
            <p style={styles}>{errorMessage}</p>
          
        </Paper>
        </Container>
    );
};

export default RegisterForm;