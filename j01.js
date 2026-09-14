let i=0;
while(i<10){
    i++;
    setIimeout(()=>{
        i++;
    },1000000);
    i++;
    console.log(i);
}