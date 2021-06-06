// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'HOME',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'LIBRARY',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'CAREERS',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'PLACEMENT CELL',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'CAMPUSES',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'CONTACT US',
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },{
        title: 'CREATE',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'post',
                path:'/createpost'
            },
            {
                title: 'event',
                path:'/createevent'
            },
            {
                title: 'query',
                path:'/queryform'
            },
            {
                title: 'internship',
                path:'/createintern'
            },
            {
                title: 'profile',
                path:'/profileform'
            },

        ]
    },{
        title: 'Chapter',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Gallery',
                path:'/images'
            },
            {
                title: 'Profiles',
                path:'/profiles'
            },
            {
                title: 'Queries',
                path:'/queries'
            }

        ]
    }

]