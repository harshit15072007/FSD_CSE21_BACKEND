const PromiseOne = new Promise((resolve, reject) => {
    console.log("Promise started");

    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

PromiseOne
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});