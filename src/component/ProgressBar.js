import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    health: PropTypes.number
}

const defaultProps = {
    health: -1
}

class ProgressBar extends Component{
    
    render(){
        let color = 'bg-success';
        if (0 <= this.props.health && this.props.health < 25) color = 'bg-danger';
        if (25 <= this.props.health && this.props.health < 50) color = 'bg-warning';
        if (50 <= this.props.health && this.props.health < 75) color = 'bg-info';

        return (
                <div className="progress">
                    <div className={`progress-bar ${color}`} role="progressbar" style={{width: this.props.health+'%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        )
    }

}
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar
