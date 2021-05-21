export const createCenter = (project) => {
    return (dispatch, getState) => {
        console.log(project)
        //make a call to Database
        dispatch({ type: 'CREATE_CENTER', center: project })
    }
};