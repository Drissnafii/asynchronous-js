function preparerDej() {
    console.log('debu...');
    setTimeout(() => {
        console.log('eau');
    }, 5000);

    setTimeout(() => {
        console.log('pain ');
    }, 3000);

    setTimeout(() => {
        console.log('café ');
    }, 2000);

    setTimeout(() => {
        console.log('Petit-déjeuner prêt ! (Temps total : 5 minutes)');
    }, 5000);

    console.log('la fin...')
}

preparerDej();