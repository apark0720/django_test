import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.formType !== nextProps.formType) {
            this.props.clearErrors();
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.processForm(user).then(
            () => {
                if (this.props.errors.length === 0) {
                    this.props.closeModal();
                }
            }
        );
    }

    handleDemoClick(e) {
        e.preventDefault();
        this.props.login({ email: 'guest@rolover.dog', password: 'woofbark' }).then(
            () => this.props.closeModal()
        );
    }

    renderRedirect() {
        let redirect;
        if (this.props.formType === 'login') {
            redirect = {
                redirectMsg: "Don't have an account?",
                buttonName: 'Sign Up',
                redirectForm: 'singup'
            };
        } else {
            redirect = {
                redirectMsg: 'Already have an account?',
                buttonName: 'Log In',
                redirectForm: 'login'
            };
        }

        return (
      <div>

        <h3>{renderMessage}</h3>

          <form onSubmit={this.handleSubmit}>
            <div>
            <br/>
              <input type='text'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder=' Enter your email address'
                />
              <i></i>
            <br/>
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder=' Enter your password'
                />
              <i aria-hidden='true'></i>
            <br/>

            {this.renderErrors()}

            <input type='submit' className='btn green' value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'}/>
            <button onClick={this.handleDemoClick}>Demo Account</button>
          </div>
        </form>

        {this.renderRedirect()}

      </div>
    );
  }
}

export default withRouter(SessionForm);