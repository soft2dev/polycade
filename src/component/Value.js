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

class Value extends Component{
    
    render(){
        let color = 'bg-success';
        if (0 <= this.props.health && this.props.health < 25) color = 'bg-danger';
        if (25 <= this.props.health && this.props.health < 50) color = 'bg-warning';
        if (50 <= this.props.health && this.props.health < 75) color = 'bg-info';

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
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value
