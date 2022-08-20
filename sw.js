const fetchText=async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await res.json();
    return data;
}

self.addEventListener('push',(e)=>{
    const data=fetchText();
    console.log(e);
    var options={
        body: data.title,
        icon: 'images/example.png',
        vibrate: [100,50,100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey:'2'
        },
        actions:[
            {action:'explore', title:'Explore this new world',
                icon: 'images/checkmark.png'},
            {action: 'close',title:'Close',
                icon:'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!',options)
    );
});
