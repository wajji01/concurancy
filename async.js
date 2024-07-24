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
async function working() {
    try {
        let res1 = await washing();
        console.log(res1);
        let res2 = await Soaking();
        console.log(res2);
        let res3 = await Daying();
        console.log(res3);
    }
    catch (error) {
    }
    finally {
        console.log("I will run any way!!!");
    }
}
working();
export {};
