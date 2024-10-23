const Logger = (state) => (next) => (action) => {
    console.log(state);
    console.log(action);
    next(action);
    console.log(state.getState());    
};

export default Logger;