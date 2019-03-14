let sayMessage = (message) => console.log(message);

sayMessage('yolo');
// setTimeout(() => {
//     sayMessage('In the Timeout!');
// }, 2000);

// let getWords = () => {
//     console.log("Words 1");
//     setTimeout( () => {
//         console.log('Word 2 that comes after 3 seconds');
//     }, 3000)
//     .then(() => {
//         setTimeout(() => {
//             console.log('Word 3 that comes after 2 seconds')
//         }, 2000);
//     });
// };

// getWords()

const done = () => {
    console.log("Job's done!");
}

const countdown = (num, callback) => {
    setTimeout(() => {
        if(num > 0){
            countdown(num - 1, callback);
            console.log(`Count is: ${num}`)
        } else {
            callback();
        };
    }, 1000);
};

countdown(12, done);