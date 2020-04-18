import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import {Navigation} from './components/Navigation'
import {Daily} from './components/pages/Daily'
import {Home} from './components/pages/Home'
import {AddWord} from './components/pages/AddWord'
import {AllWords} from './components/pages/AllWords'
import {Weekly} from './components/pages/Weekly'
import {Monthly} from './components/pages/Monthly'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row" id="header">
                        <div className="col">
                            <div>
                                <h3>WORDS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="nav_bar">
                        <div className="col">
                            <Navigation path="/" name="Home"/>
                            <Navigation path="/add" name="Add Word"/>
                            <Navigation path="/all" name="All Words"/>
                            <Navigation path="/daily" name="Daily"/>
                            <Navigation path="/weekly" name="Weekly"/>
                            <Navigation path="/monthly" name="Monthly"/>
                        </div>
                    </div>
                    <div className="row" id="content">
                        <div className="col">
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/add" component={AddWord}/>
                                <Route path="/all" component={AllWords}/>
                                <Route path="/daily" component={Daily}/>
                                <Route path="/weekly" component={Weekly}/>
                                <Route path="/monthly" component={Monthly}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
