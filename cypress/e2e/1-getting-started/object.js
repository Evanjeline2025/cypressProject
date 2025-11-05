let sridevy={
    name:'Sridevy',
    function(){
        console.log("This is function inside an object")
        console.log("Family Female leader is : "+this.name)
    }

}
let Sajeetha={
    name:'sajeetha',
    function(){
        console.log("This is function inside an object")
        console.log("Family Female leader is : "+this.name)
    }

}
sridevy.function()
Sajeetha.function()