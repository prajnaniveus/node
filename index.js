




const promise = new Promise((resolve, reject) => {  
        resolve('Promise is resolved successfully.');  
      
});
promise.then(
    (result) => { 
       console.log(result);
    },
    (error) => { 
       console.log(error);
    }
);
