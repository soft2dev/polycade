import React, { Component } from 'react';
import * as actions from '../reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';



class Detail extends Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            textInput: '',
            id: ''
        }
        this.updateName = this.updateName.bind(this);
        this.onHandleName = this.onHandleName.bind(this);       
    }
    
    updateName = (e) => {
        e.preventDefault()
        this.props.putMachineName(this.state.id,{ name: this.state.textInput})
    };
    onHandleName = (e) => {
        this.setState({
            textInput: e.target.value,
            id: e.target.name
        })
    }
    render(){
        console.log(this.props)
        let selMachine = this.props.machines.find( machine => machine.id === this.props.match.params.id )
        if (!selMachine) return(<div></div>)
        let color = 'bg-success';
        if (0 <= selMachine.health && selMachine.health < 25) color = 'bg-danger';
        if (25 <= selMachine.health && selMachine.health < 50) color = 'bg-warning';
        if (50 <= selMachine.health && selMachine.health < 75) color = 'bg-info';
        return(
            <div>
                <div className="continer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <h1>{selMachine.name}</h1>
                        </div>
                        <div className="form-group">
                            <h3>Update Device</h3>
                        </div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text" onChange={this.onHandleName} name={selMachine.id} />
                        </div>
                        <div className="text-right">
                            <button onClick={this.updateName} className="btn btn-success"  type="submit" text="">SUBMIT</button>
                        </div>
                    </div>                    
                    <div className="col-md-6">
                        <div className="form-group bg-light container">
                            <div>
                                <h1 className="text-center">{selMachine.health}</h1>
                                <ProgressBar health={selMachine.health}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <h3>Stats</h3>
                            <div>IP Address: {selMachine.ip_address}</div>
                        </div>
                    </div>
                </div>    
                </div>
            </div>
        )
    }   
}

const mapStateToComponent = ({ machines }) => ({
    machines: machines.machines
})

const mapDispatchToProps = (dispatch) => bindActionCreators(actions,dispatch)


export default connect( mapStateToComponent,mapDispatchToProps )(Detail)
