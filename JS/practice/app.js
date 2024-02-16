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