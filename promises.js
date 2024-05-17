let internship = false;

let ourPromise = new Promise((resolve,reject)=>{
    if(internship){
        resolve('I made it');
    }
    else{
        reject('I will try harder');
    }
})

ourPromise.then((response)=>{
    console.log(response);
    console.log('I will continue working hard')
})
.catch((error)=>{
    console.log({error});
    console.log('I will continue appling for jobs');
})
.finally(()=>{
    console.log('I will be a software engineer');
})
console.log({ourPromise});



async function myAkiraChixDream(){
    try{
        console.log('This is my dream');
        await ourPromise;
    }

    catch{
        console.log('Our dream is not yet fullfiled');
    }
    // console.log('This is my dream');
    // await ourPromise;
}

myAkiraChixDream();

//then
//catch
//final