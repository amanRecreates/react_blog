const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, Ninjas !!')
    }
    
    return (
        <div className="home">
            <h2>Homepge</h2>
            <button onClick={() => handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;