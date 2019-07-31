import React, {Component} from 'react'
import {Word} from './Word'
import axios from 'axios'

export class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(`/${this.props.endpoint}`)
            .then(res => {
                this.setState({words: res.data})
            })
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
            <div className="card" id="w_list">
                {
                    (this.state.words.length !== 0) ? this.state.words.map(w => (
                        <div className="row" id="list" key={w.id}>
                            <Word {...w}/>
                            <div className="align-self-center mr-3">
                                <button className="btn btn-danger btn-sm"
                                        id={w.id} name={w.engName}
                                        onClick={this.deleteWord}>Delete
                                </button>
                            </div>
                        </div>
                    )) : (<div><h1>There is no words</h1></div>)
                }
            </div>
        )
    }
}