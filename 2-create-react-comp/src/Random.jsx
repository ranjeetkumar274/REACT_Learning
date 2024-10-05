function Random(){
    let number = Math.random()*100;

    return <h2 style={{"background-color":"red",
        "color":"white"
    }}> Generate a Random number : {Math.round(number)}</h2>
}

export default Random;