import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Ingresa tus datos</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ingresa email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Ingresa password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame por 10 dias</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                <p className="forgot-password text-right">
                    Te olvidaste la  <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}