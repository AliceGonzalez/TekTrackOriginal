import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div>
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Don't have an account? <a href="/signup">Create one</a></p>
            </div>
            <div>
                <p>Or sign in with:</p>
                <button>Facebook</button>
                <button>GitHub</button>
                <button>Gmail</button>
            </div>
        </div>
    );
};

export default Login;