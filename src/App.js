import React from "react";
import './App.css'
const App = () => {
  /** Check for string has atleast atleast one lowercase char */
  const hasLowerCase = (str) => {
    return str.toUpperCase() != str;
  }
  /** Check for string has atleast atleast one uppercase char */
  const hasUpperCase = (str) => {
    return str.toLowerCase() != str;
  }
  /** Check for string has atleast atleast one number*/
  const containsNumbers = (str) => {
    return /\d/.test(str);
  }

  /** For Login. Right now the code for login to server is not added*/
  const SubmitLogin = (e) =>{
    e.preventDefault()
    
    const password = document.forms[0]['password'].value
    // console.log(password.length,password)
    const regexStr = /[a-zA-Z0-9]/g


    const result = maxRepeating(password)
    console.log(result.count)

    if(result.count > 2){
      alert('repeeating characters '+ result.res + " "+result.count +" times")
      const result1 = countSteps(password)
      alert("Number os steps to make password strong is "+result1)
      return

    }else if(result.count === 0){
     alert("Password is strong!!!\nSigning in")
     return
    }

    if(password.length < 6){
      alert("Minimum 6 alpha-numeric character")
      return
    }
    if(password.length > 20){
      alert("Maximum 20 alpha-numeric character")
      return
    }
    
    if(!hasLowerCase(password)){
      alert('Atleast one lowercase Letter')
      return
    }
    if(!hasUpperCase(password)){
      alert('Atleast one uppercase Letter')
      return
    }

    if(!containsNumbers(password)){
      alert('Atleast one digit')
      return
    }
    
  
  }

    /** Count steps to make password strong*/
  const countSteps = (password) => {
    let count = 0;
    let digit = /(\d)/;
    let upper = /([A-Z])/;
    let lower = /([a-z])/;
    let spChar = /(\W)/;
   
    let Digit = digit.exec(password);
    let Upper = upper.exec(password);
    let Lower = lower.exec(password);
    let Special = spChar.exec(password);
   
    
    if (!Digit) {
      count++;
    }
  
    if (!Upper) {
      count++;
    }

    if (!Lower) {
      count++;
    }
 
    if (!Special) {
      count++;
    }
    
    if (count + password.length < 8) {
      count = count + 8 - (count + password.length);
    }
   
    return count;
  }
  /** return repeating characters with count*/
  const maxRepeating = (str) =>
    {
        let len = str.length;
        let count = 0;
        let res = str[0];
        for (let i=0; i<len; i++)
        {
            let cur_count = 1;
            for (let j=i+1; j<len; j++)
            {
                if (str[i] != str[j])
                    break;
                cur_count++;
            }
            if (cur_count > count)
            {
                count = cur_count;
                res = str[i];
            }
        }
        return {res,count};
    }
     
  
  return (
     <div>
      <div>
        <marquee>Don't have to time to write backend code for connecting to mongodb to update the password in db</marquee>
        <marquee>Can add the backend code for connecting to db as well unit testing once get free.</marquee>
        <marquee>Have used bootstrap in simple way to keep code simple</marquee>
      </div>
      <form onSubmit={e=>SubmitLogin(e)}>
        <div className='mainContainer'>
          <div className='row'>
           <div className='col-4' >
             <span>Password</span>
           </div>
           <div className='col-8'>
             <input id='password' type="password"  class="flex-fill mr-2 form-control" style={{border:'1px solid blue'}} required/>
            </div>
          </div>
         <div>
        <br/>
        <div className='row'>
           <div className='col-6'></div>
            <div className='col-6'>
              <button type="submit">Login</button>
            </div>
           </div>
          </div>
         </div>
       </form>
      </div>
  );
}

export default App;
