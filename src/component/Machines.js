import React, { Component } from 'react';

import Value from './Machine';
import { connect } from 'react-redux';

class Machines extends Component{

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

export default connect( mapStateToComponent,null )(Machines)
