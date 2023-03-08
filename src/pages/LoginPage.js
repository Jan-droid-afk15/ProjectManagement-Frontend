import Login from "../components/Login";

const LoginPage = (props) => {
    return (
        <>
        
            {(!props.authenticated) ? (
                <Login onAuthenticated={props.onAuthenticated} />
            ) : (
                <p>You are logged in</p>
            )}
            
            
        </>
    );
};

export default LoginPage;