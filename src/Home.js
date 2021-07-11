import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('Aman')
        setAge(22)
    }
    
    return (
        <div className="home">
            <h2>Homepge</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={() => handleClick()}>Click Me</button>
        </div>
    );
}
 
export default Home;