const Home = () => {

    const handleClick = () =>{
        console.log("Hello ninjas!");
    }

    const handleCLickAgain = (name) =>{
        console.log("Hello " + name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleCLickAgain("Dhanika")
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;