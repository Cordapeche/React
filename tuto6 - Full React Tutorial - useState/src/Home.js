import {useState} from 'react'

const Home = () => {
    // let name = 'Ibrah';
    const [name, setName] = useState('Bah')
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Ibrah');
        setAge('26');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p> {name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;