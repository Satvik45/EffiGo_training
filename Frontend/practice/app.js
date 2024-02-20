function sum(a,b){
    console.log(a+b) ; 
}

function calculator(a,b , sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum)

calculator(1,2,  (a,b) =>{
    sum= console.log(a+b)
}
)


const satvik = () => {
    console.log("satvik")
}

setTimeout(satvik, 3000)


function getData(dataId, getNextData){

    setTimeout (() => {
        console.log("data ", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);

}

getData(1, () => {
    getData(2,() => {
        getData(3);
    });
});

const date = new Date(2/16/2024);
document.getElementById(demo).innerHTML = date;

let promise = new Promise( (resolve , reject) => {
    console.log("Promised");
    resolve("success");
} );

function getData(dataId,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout (() => {
                    console.log("data ", dataId);
                    if(getNextData){
                        getNextData();
                    }
                }, 2000);
    });
}

let promise2 = new Promise( (resolve , reject) => {
    console.log("Promise reject ");
    reject("Hii Satvik, An unexpected Error occured");
} );

