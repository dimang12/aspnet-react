import React, {Component} from "react";

export class Create extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStart: '',
            dateCompleted: ''
        }
        this.onChangeName = this.onChangeName.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const tripObject = {
            Id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            dateStart: this.state.dateStart,
            dateCompleted: this.state.dateCompleted
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    onChangeDescription = (e) => {
        this.state.description = e.target.value;
    }

    onChangeDateStart = (e) => {
        this.state.dateStart = e.target.value;
    }

    onChangeDateCompleted = (e) => {
        this.state.dateCompleted = e.target.value;
    }

    render() {
        return (
            <div className="container">
                <div className="trip-form" >
                    <h3>Add new trip</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Trip name:  </label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trip description: </label>
                            <textarea type="text" className="form-control" 
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                        </div>
                        <div className="row">
                            <div className="col col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label>Date of start:  </label>
                                    <input 
                                    type="date" 
                                    className="form-control" 
                                    value={this.state.dateStart}
                                    onChange={this.onChangeDateStart}
                                    />
                                </div>
                            </div>
                            <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="form-group">
                            <input type="submit" value="Add trip" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}