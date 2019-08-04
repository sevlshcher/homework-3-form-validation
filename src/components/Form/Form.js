import React from 'react'
import './Form.css'
import img from './assets/bond_approve.jpg'

class Form extends React.Component {
    state = {
        firstname:'',
        lastname:'',
        password:'',
        firstNameErr:'',
        lastNameErr:'',
        passwordErr:''
    }

    changeFirstname = (e) => {
        this.clearErr()
        this.setState ({firstname: e.target.value})
    }
    changeLastname = (e) => {
        this.clearErr()
        this.setState ({lastname: e.target.value})
    }
    changePassword = (e) => {
        this.clearErr()
        this.setState ({password: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {firstname, lastname, password} = this.state
        if(firstname === 'james' && lastname === 'bond' && password === '007') {
            this.setState ({signIn: true})
        } else {
            this._isFormValid()
        }
    }
    _isFormValid = () => {
        this._isFirstNameVal();
        this._isLastNameVal();
        this._isPasswordVal()
    }
    _isFirstNameVal = () => {
        const {firstname} = this.state
        if(firstname === ''){
            this.setState ({firstNameErr:'Нужно указать имя'})
        } else if(firstname.toLowerCase() !== 'james'){
            this.setState ({firstNameErr:'Имя указано не верно'})
        }
    }
    _isLastNameVal = () => {
        const {lastname} = this.state
        if(lastname === ''){
            this.setState ({lastNameErr:'Нужно указать фамилию'})
        } else if(lastname.toLowerCase() !== 'bond'){
            this.setState ({lastNameErr:'Фамилия указана не верно'})
        }
    }
    _isPasswordVal = () => {
        const {password} = this.state
        if(password === ''){
            this.setState ({passwordErr:'Нужно указать пароль'})
        } else if(password !== '007'){
            this.setState ({passwordErr:'Пароль указан не верно'})
        }
    }
    clearErr = () => {
        this.setState ({firstNameErr:'', lastNameErr:'', passwordErr:''})
    }

    render() {
        const { firstname, lastname, password, firstNameErr, lastNameErr, passwordErr, signIn} = this.state
        return (
            <div className="app-container">
                {signIn ? (
                    <img src={img} alt="bond approve" className="t-bond-image"/>
                ) : (
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Введите свои данные, агент</h1>
                        <p className="field">
                            <label className="field__label" htmlFor="firstname">
                                <span className="field-label">Имя</span>
                            </label>
                            <input
                                className="field__input field-input t-input-firstname"
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={this.changeFirstname}
                            />
                            <span className="field__error field-error t-error-firstname">
                                {firstNameErr}
                            </span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="lastname">
                                <span className="field-label">Фамилия</span>
                            </label>
                            <input
                                className="field__input field-input t-input-lastname"
                                type="text"
                                name="lastname"
                                value={lastname}
                                onChange={this.changeLastname}
                            />
                            <span className="field__error field-error t-error-lastname">
                                {lastNameErr}
                            </span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="password">
                                <span className="field-label">Пароль</span>
                            </label>
                            <input
                                className="field__input field-input t-input-password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.changePassword}
                            />
                            <span className="field__error field-error t-error-password">
                                {passwordErr}
                            </span>
                        </p>
                        <div className="form__buttons">
                            <input
                                type="submit"
                                className="button t-submit"
                                value="Проверить"
                            />
                        </div>
                    </form>
                )}
            </div>
        )
    }

}

export default Form