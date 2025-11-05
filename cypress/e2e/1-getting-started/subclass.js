import Login from '../1-getting-started/baseclass';
function loginAll(username,password){
let newuser=new Login();
newuser.tryLoginFunct(username,password)   
}
export  {loginAll};