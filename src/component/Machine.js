import React, { Component } from 'react';

import Value from './Value';
import * as actions from '../reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Machine extends Component{

    render(){
        const mapToComponent = (data) => {
            return data.map( (machine, i)  => {
                return(<Value id={machine.id} name={machine.name} ip_address={machine.ip_address} health={machine.health} key={i}/>)
            })
        }
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ip</th>
                            <th>Health</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapToComponent(this.props.machines)}
                    </tbody>
                </table>                
            </div>
        )
    }
    
}

const mapStateToComponent = ({ machines }) => ({
    machines: machines.machines
})

const mapDispatchToProps = (dispatch) => bindActionCreators(actions,dispatch)

export default connect( mapStateToComponent,mapDispatchToProps )(Machine)
