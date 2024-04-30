import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Harbor Register</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente ratione nam veniam corrupti cupiditate repellat
                        autem odit aspernatur doloribus eveniet.
                    </p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="Password" />
                        <input type="name" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
