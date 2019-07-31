import React, {Component} from 'react'
import axios from 'axios'
import {TimeWord} from "./TimeWord";

export class GetAll extends Component {
    state = {
        words: []
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(`/all`)
            .then(res => this.setState({words: res.data}))
    };

    resetRate = (e) => {
        let confirmation = window
            .confirm(`Are you sure you want to reset - ${e.target.name}?`);
        if (confirmation) {
            axios.put(`/rate/${e.target.id}`)
                .then(res => {
                    console.log('res', res.data);
                    this.getData()
                })
        }
    };

    deleteWord = (e) => {
        // console.log(e.target.name);
        let confirmation = window
            .confirm(`Are you sure you want to delete - ${e.target.name}?`);
        if (confirmation) {
            axios.delete(`/delete/${e.target.id}`)
                .then(res => {
                    console.log('delete_word response', res.data);
                    this.getData()
                })
        }
    };

    render() {
        return (
            <div className="card" id="all_w">
                {this.state.words.map(w => (
                    <div className="row" id="list" key={w.id}>
                        <TimeWord {...w}/>
                        <div className="align-self-center mr-3">
                            <button className="btn btn-warning btn-sm"
                                    id={w.id} name={w.engName}
                                    onClick={this.resetRate}>Reset
                            </button>
                        </div>
                        <div className="align-self-center mr-3">
                            <button className="btn btn-danger btn-sm"
                                    id={w.id} name={w.engName}
                                    onClick={this.deleteWord}>Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}