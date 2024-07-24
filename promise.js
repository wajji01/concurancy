function washing() {
    console.log("Washing Started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Washing Done");
        }, 5000);
    });
}
;
function Soaking() {
    console.log("Soaking Started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Soaking Done");
        }, 3000);
    });
}
;
function Daying() {
    console.log("Daying Started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Daying Done");
        }, 2000);
    });
}
;
washing()
    .then((val) => {
    console.log(val);
    return Soaking();
})
    .then((val) => {
    console.log(val);
    return Daying();
})
    .then((val) => {
    console.log(val);
});
export {};
