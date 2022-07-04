import { Link, Routes, Route } from 'react-router-dom';

import Frontend from './Frontend'
import Backend from './Backend'
import QA from './QA'


function TeamList () {
    const ourTeam = [
        {
            name:'Alex',
            position: 'Backend developer',
            path: 'backend'
        },
        {
            name:'Green',
            position: 'Frontend developer',
            path: 'frontend'
        },
    
        {
            name:'Nobody',
            position: 'QA',
            path: 'testing'
        },
        
    ]
    return ( 
        
    
           ourTeam.map(elem => {
                return <>
                    <h1>{elem.name}</h1>
                    <h2>Position:{<Link to={`${elem.path}`}>{elem.position}</Link>}</h2>
                </>
            })
        
    )
}

function Team ({}) {
    const ourTeam = [
        {
            name:'Alex',
            position: 'Backend developer',
            path: 'backend'
        },
        {
            name:'Green',
            position: 'Frontend developer',
            path: 'frontend'
        },
    
        {
            name:'Nobody',
            position: 'QA',
            path: 'testing'
        },
        
    ]
    return (

        <section>
            
                {/* {
                ourTeam.map(elem => {
                        return <>
                            <h1>{elem.name}</h1>
                            <h2>Position:{<Link to={`${elem.path}`}>{elem.position}</Link>}</h2>
                        </>
                    })
                } */}
                <Routes>
                    <Route path='frontend' element={<Frontend/>}></Route>
                    <Route path='backend' element={<Backend/>}></Route>
                    <Route path='testing' element={<QA/>}></Route>
                    <Route path='/' element={<TeamList/>}>
                        
                    </Route>
                </Routes>
        </section>
             
        
    )
}

export default Team;