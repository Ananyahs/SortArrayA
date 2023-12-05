let a=[4, 6, 1, 8, 3, 9, 4, 2, 8, 5];
a=sortArr(a);
console.log(a.join(" "));

function sortArr(a){
    let temp=a[0];

    for(let i=0;i<a.length;i++)
    {
        for(j=0;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}