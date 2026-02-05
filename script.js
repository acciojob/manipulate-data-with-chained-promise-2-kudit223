//your JS code here. If required.

const output=document.querySelector('#output');
const arrPromise=()=>new Promise(resolve=>setTimeout(
    ()=>resolve([1, 2, 3, 4]),3000));

arrPromise()
.then((data)=>{
    data=data.filter(item=>item%2==0);
    setTimeout(()=>{
        output.innerHTML=`[${data}]`;
    },1000)
    return data;
}).then(data=>{
    setTimeout(()=>{
        data.forEach((item,i)=>{
            data[i]=item*2;
        })
        output.innerHTML=`[${data}]`
    },2000)
})
