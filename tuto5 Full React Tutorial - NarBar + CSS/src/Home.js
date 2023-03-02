const Home = () => {

    const handleClick = (e) => {
        console.log('hello guys');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('name')            }>Click again</button>
        </div>
    );
}
 
export default Home;