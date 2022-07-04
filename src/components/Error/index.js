import { Link } from 'react-router-dom';


function Error () {
    
    return (

        <section>
            <h1>Error 404</h1>
            <h2>The page is not difined</h2>   
            <Link to='/' className='btn'>Home</Link>     
        </section>      
    )
}

export default Error;