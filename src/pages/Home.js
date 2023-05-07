import Nav from '../components/Nav.js'
import {useState, useEffect} from 'react'

const Home = () => {

    const [count, setCount] = useState(0);

return <>
        <Nav/>
        <div>
            <p>Eeeeeeeeeeeet le compteur est actuellement égal à : {count}</p>
            <button onClick={() => setCount(count + 1)}>
            C'est ici qu'il faut cliquer
            </button>
        </div>
        </>
}


export default Home