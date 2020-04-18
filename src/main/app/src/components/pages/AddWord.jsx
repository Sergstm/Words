import React, {Component} from 'react'
import axios from 'axios'

export class AddWord extends Component {
    state = {
        engName: '',
        rusName: '',
        resp: ''
    };

    handleInput = (e) => {
        // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/add`, this.state)
            .then(res => {
                this.setState({resp: res.data})
            });
        this.engInput.value = '';
        this.rusInput.value = '';
    };

    render() {
        return (
            <div className="card" id="add_w">
                <h3>And new word</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="engName" placeholder=" ENGLISH"
                               className="inp_text" required
                               onChange={this.handleInput}
                               ref={el => this.engInput = el}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="rusName" placeholder=" RUSSIAN"
                               className="inp_text" required
                               onChange={this.handleInput}
                               ref={el => this.rusInput = el}/>
                    </div>
                    <div className={
                        (this.state.resp === '') ? 'mb-5' :
                            (this.state.resp === 'Saved') ?
                                'text-success mb-2' : 'text-danger mb-2'
                    }>{this.state.resp}</div>
                    <button className="btn btn-primary" type="submit">Save</button>
                </form>
            </div>
        )
    }
}