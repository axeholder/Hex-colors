function changeColor(){
    const hexNumbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexcode = '';

    for (let i = 0; i < 6; i+= 1) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);

        hexcode += hexNumbers[randomIndex];
    };
    document.getElementById("hex-code").innerHTML = hexcode;

    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
};