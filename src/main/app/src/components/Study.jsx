import React, {Component} from 'react'
import axios from 'axios'

export class Study extends Component {
    state = {
        id: 0,
        engName: '',
        rusName: '',
        time: '',
        rate: 0,
        compare: false,
        lang: 'eng'
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(`/get`)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    id: res.data.id,
                    engName: res.data.engName,
                    rusName: res.data.rusName,
                    time: res.data.time,
                    rate: res.data.rate
                });
                if (this.state.id !== 0) this.inp.focus()
            })
    };

    postData = () => {
        let word = {
            id: this.state.id,
            engName: this.state.engName,
            rusName: this.state.rusName,
            rate: this.state.rate + ((this.state.compare) ? 1 : -1)
        };
        axios.put(`/update`, word)
            .then(res => {
                // console.log("res", res.config.data);
                console.log('status', res.statusText);
                this.getData();
                this.setState({compare: false});
                this.inp.value = ''
            })
    };

    handleEng = () => {
        this.setState({lang: 'eng'})
    };

    handleRus = () => {
        this.setState({lang: 'rus'})
    };

    handleClick = () => {
        this.postData()
    };

    handleInput = (e) => {
        let name = (this.state.lang === 'eng') ? this.state.rusName : this.state.engName;
        if (name.toUpperCase() === e.target.value.toUpperCase()) {
            this.setState({compare: true});
            this.btn.focus()
        }
    };

    render() {
        return (
            <div className="card" id="home">
                <div id="lang">
                    <button className="btn btn-secondary btn-sm border"
                            onClick={this.handleEng}>English
                    </button>
                    <button className="btn btn-secondary btn-sm border"
                            onClick={this.handleRus}>Russian
                    </button>
                </div>
                <div id="play">
                    {
                        (this.state.id !== 0) ?
                            (<div>
                                <div>
                                    {(this.state.lang === 'eng') ?
                                        <h1>{this.state.engName}</h1>
                                        : <h1>{this.state.rusName}</h1>}
                                </div>
                                <div className={(this.state.compare) ?
                                    'bg-success' : 'bg-danger'}>
                                    <input type="text" name="inp" id="inp_study"
                                           ref={el => this.inp = el}
                                           onChange={this.handleInput}/>
                                </div>
                                <button className="btn btn-secondary btn-block mt-2"
                                        ref={r => this.btn = r}
                                        onClick={this.handleClick}>Next
                                </button>
                            </div>) : (<div><h1>There is no words</h1></div>)
                    }
                </div>
            </div>
        )
    }
}