import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const PlayersList = props => (
    <div>
        {props.players.length === 0 ? (
            <p>This ship was abandoned.</p>
        ) : (
            props.players.map(player => {
                return <div key={player.id}>Pirate {player.name}</div>;
            })
        )}
    </div>
);

PlayersList.propTypes = {
    players: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps)(PlayersList);
