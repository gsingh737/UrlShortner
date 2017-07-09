/**
 * Created by User on 7/8/2017.
 */
import React, {Component} from 'react';

class LinkCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: ''
        };
    }

    handleSubmit(event){
            event.preventDefault();
            console.log(this.refs.link.value);
            Meteor.call('links.insert', this.refs.link.value, (error) => {
                if(error){
                    this.setState({error: 'Enter a valid url'});
                }
                else {
                    this.setState({error: ''});
                    this.refs.link.value = '';
                }
                console.log(error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten </label>
                    <input ref="link" className="form-control" />
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary"> Shorten! </button>
            </form>
        );
    }
}

export default LinkCreate;