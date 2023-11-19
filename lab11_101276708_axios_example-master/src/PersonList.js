// PersonList.js

import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; // Import a CSS file for styling

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Person List</h2>
        <table className="person-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => (
              <tr key={person.login.uuid}>
                <td>
                  <img
                    src={person.picture.thumbnail}
                    alt={`${person.name.first} ${person.name.last}`}
                    className="person-image"
                  />
                </td>
                <td>{`${person.name.title} ${person.name.first} ${person.name.last}`}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{`${person.location.city}, ${person.location.country}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonList;
