import React, { Component } from "react";
import axios from 'axios';

export class Trips extends Component {
    constructor (props) {
        super(props);
        // define state
        this.state = {
            trips: [],
            loading: true
        }
    }l
    componentDidMount() {
        this.manipulateTripsData();
    }
    manipulateTripsData() {
        axios.get('api/Trips/GetTrips').then(response => {
            this.setState({
                trips: response.data,
                loading: false
            })
        });   
    }

    render() {
        let content  = this.state.loading? (
            <p>
                <em>Loading...</em>
            </p>
        )
        :
        (
            this.renderAllTripTable(this.state.trips)
        )
        ;
        return (
             <div>
                 {content}
             </div>
        );
    }

    renderAllTripTable(trips){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Acitons</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, index) => (
                        <tr key={trip.id}>
                            <td>{index + 1}</td>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                            <td>{trip.dateCompleted? new Date(trip.dateCompleted).toLocaleDateString(): '-'}</td>
                            <td>
                                <a className="btn">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        );
    }
}