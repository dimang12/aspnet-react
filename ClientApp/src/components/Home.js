import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome the Trip Management</h1>
        <p>You can use the system to manage</p>
        <ul>
            <li>
                <Link to="/create">Add new Trip</Link>
            </li>
            <li>Edit and update the trip</li>
            <li>Delete the trip</li>
        </ul>
      </div>
    );
  }
}
