import Register from "../components/Register";

const RegisterPage = (props) => {
    return (
        <>
        
        
            {(!props.authenticated) ? (
                <Register onAuthenticated={props.onAuthenticated} />
            ) : (
                <p>You are Registered</p>
            )}
            
            
        </>
    );
};

export default RegisterPage;