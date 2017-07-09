/**
 * Created by User on 7/8/2017.
 */
import React, {Component} from 'react';

class LinkCreate extends Component {
    handleSubmit(event){
            event.preventDefault();


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten </label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-primary"> Shorten! </button>
            </form>
        );
    }
}

export default LinkCreate;