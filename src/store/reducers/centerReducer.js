const initState = {
    projects: [
        {id:'1', title:'Fulstack WebDeveloper',location:'United States of America', companyName:'Infosys', description:'blah blah blah blah', openings:'9', link: 'www.google.com'},
        {id:'2', title:'FrontEnd WebDeveloper',location:'United States of America', companyName:'Infosys', description:'blah blah blah blah', openings:'9', link: 'www.google.com'},
        {id:'3', title:'Backend WebDeveloper',location:'United States of America', companyName:'Infosys', description:'blah blah blah blah', openings:'9', link: 'www.google.com'},
        {id:'4', title:'Django WebDeveloper',location:'United States of America', companyName:'Infosys', description:'blah blah blah blah', openings:'9', link: 'www.google.com'},

    ]
}

const centerReducer = (state = initState, action) => {
    return state;
}

export default centerReducer;