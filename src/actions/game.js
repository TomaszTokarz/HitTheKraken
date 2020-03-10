export const createLobby = (creator, players = [], rules) => ({
    type: actionType.CREATE_LOBBY,
    payload: {
        creator,
        players,
        rules,
        timestamp: Date.now(),
    },
});

export const actionType = {
    CREATE_LOBBY: 'CREATE_LOBBY',
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    REMOVE_GAME: 'REMOVE_GAME',
};
