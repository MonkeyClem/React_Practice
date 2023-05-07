import Nav from '../components/Nav.js'
import {useState, useEffect} from 'react'

const Home = () => {

    const [count, setCount] = useState(0);
    const [color,setColor]=useState('');
    const [textColor,setTextColor]=useState('white');

   
    console.log(color)
    console.log(count)
    console.log(count)
    
return <>
        <Nav/>
        <div  style={{background:color,color:textColor}}>
            <h3>Le UseState, usage basique</h3>

            <p>Eeeeeeeeeeeet le compteur est actuellement égal à : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click Here !
            </button>

            <p>Wanna change the background color ? </p>
            <button className='btn btn-primary' onClick={()=>{setColor("white");setTextColor('black')}}>
                Click here
            </button>

            <button className='white' onClick={()=> {setColor('black');setTextColor('white')}}>
                Click there to return to a dark background
            </button>
        </div>
        </>
}


export default Home