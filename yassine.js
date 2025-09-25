function salam(name, callback) {
    console.log("salamm " + name);

    callback();
}

let msg = () => {
    console.log("you get a job");
}

salam("Driss", msg);