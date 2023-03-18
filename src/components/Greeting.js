import User from "./User";
const Greeting = () => {
    const users = [
        {
            name: "shalom",
            age:27,
        },
        {
            name: "riska",
            age:25,
        },
        {
            name: "deborah",
            age:23,
        },
        {
            name: "gabriella",
            age:17,
        },
    ]
    const planets = [
        {
            name: "Mars",
            isGasPlanet:false
        },
        {
            name: "Eart",
            isGasPlanet:false
        },
        {
            name: "Jupiter",
            isGasPlanet:true
        },
        {
            name: "Venus",
            isGasPlanet:false
        },
        {
            name: "Neptune",
            isGasPlanet:true
        },
        {
            name: "Urenus",
            isGasPlanet:true
        },
    ]
    return (
        <div>
            {
                users.map((user,key) => {
                    return (
                        <User name={user.name} age={user.age} key={key} />
                    );
                })
            }
            {
                planets.map((planet, key) =>  planet.isGasPlanet && <h1 key={key}>{ planet.name}</h1>)
            };
        </div>    
    );
};



export default Greeting;