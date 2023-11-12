import React, { Component } from 'react';

class UserFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                gender: '',
                country: '',
            },
        };

        this.countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
    }

    onValueChanged = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value,
            },
        }));
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        console.log('Form Data:', this.state.user);
        
    };

    render() {
        return (
            <div style={{ maxWidth: '400px', margin: 'auto' }}>
                <h1>Data Entry Form (Class Component)</h1>
                <form
                    onSubmit={this.onSubmitForm}
                    style={{
                        border: '1px solid #ccc',
                        padding: '20px',
                        borderRadius: '5px',
                    }}
                >
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Email:
                        </label>
                        <input
                            name="email"
                            type="text"
                            onChange={this.onValueChanged}
                            placeholder="Enter Email"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Password:
                        </label>
                        <input
                            name="password"
                            type="password"
                            onChange={this.onValueChanged}
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Gender:
                        </label>
                        <label style={{ marginRight: '15px' }}>
                            <input
                                name="gender"
                                type="radio"
                                value="Male"
                                onChange={this.onValueChanged}
                                required
                            />{' '}
                            Male
                        </label>
                        <label>
                            <input
                                name="gender"
                                type="radio"
                                value="Female"
                                onChange={this.onValueChanged}
                                required
                            />{' '}
                            Female
                        </label>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Country:
                        </label>
                        <select
                            name="country"
                            onChange={this.onValueChanged}
                            required
                        >
                            <option value="" disabled selected>
                                Select Country
                            </option>
                            {this.countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserFormClass;
