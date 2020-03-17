import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar'

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    ip: PropTypes.string,
    health: PropTypes.number
}

const defaultProps = {
    id: 'Unknown',
    name: 'Unknown',
    ip_address: 'Unknown',
    health: -1
}

class Machine extends Component{
    
    render(){

        return (
            <tr>
                <td><Link to={`/detail/${this.props.id}`}>{this.props.name}</Link></td>
                <td>{this.props.ip_address}</td>
                <td>
                    <ProgressBar health= {this.props.health}/>
                </td>
            </tr>
        )
    }

}
Machine.propTypes = propTypes;
Machine.defaultProps = defaultProps;

export default Machine
