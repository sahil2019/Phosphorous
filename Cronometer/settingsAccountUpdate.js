function updateEmailAdd(){
   var html=""
   html+=`<div  class="email__update__upper">Change Email Address</div>
            <div class="email__update__main__part">
                    <div>Enter your new email address</div>
                    <div><input id="email__change" type="text"/></div>
                    <div>
                        <button id="email__cancel" >Cancel</button>
                        <button id="email__ok">Ok</button>
                    </div>
        </div>
                
   `
   
  let ele = document.getElementById('update__button__function')
  console.log(ele)
  if(ele.style.display=="none")
  {
      ele.style.display="block";
      ele.innerHTML=html
    
  }
  else{
      ele.style.display="none"
  }
  document.getElementById('email__cancel').addEventListener('click',()=>{
    document.getElementById('update__button__function').style.display="none"
})
document.getElementById('email__ok').addEventListener('click',()=>{
    document.getElementById('orignal__email').value=document.getElementById('email__change').value
    document.getElementById('update__button__function').style.display="none"
    
})
}

function updatePassAdd(){
    var html=""
    html+=`<div  class="email__update__upper">Change Password</div>
                <div class="password__update__main__part">
                <div>
                    <label>Current password</label>
                    <input id="curr__pass" type="text"/>
                </div>
                <div>
                    <label>Enter new password</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>confirm new password</label>
                    <input id="new__pass" type="text"/>
                </div>
                <div>
                    <button id="pass__cancel" >Cancel</button>
                    <button id="pass__ok">Ok</button>
                </div>
                </div>
             
                 
    `
    
   let ele = document.getElementById('update__button__function__password')
   console.log(ele)
   if(ele.style.display=="none")
   {
       ele.style.display="block";
       ele.innerHTML=html
     
   }
   else{
       ele.style.display="none"
   }
   document.getElementById('pass__cancel').addEventListener('click',()=>{
     document.getElementById('update__button__function__password').style.display="none"
 })
 document.getElementById('pass__ok').addEventListener('click',()=>{
     document.getElementById('orignal__pass').value=document.getElementById('new__pass').value
     document.getElementById('update__button__function__password').style.display="none"
 })
 }
 function deleteAccount()
 {
    var html=""
    html+=`<div  class="email__update__upper">Delete Account</div>
            <div class="delete__account__main__part">
                <div>
                    <h3> Are you sure you want to permanently delete your cronometer.com account?</h3>
                    <p>Before you go, maybe our <a href="support@cronometer.com">support@cronometer.com</a> team can help you with a problem or complaint?</p>
                    <p>We'd appreciate any comments as to why you have decided to delete your account:</p>
                    <textarea></textarea>
                    <input type="checkbox"/>
                    <label>Yes, I'm sure I want to delete my account</label><br>
                    <p><b style="color:red">Warning</b>: Your account will be irreversibly deleted!</p>
                </div>
                <div>
                    <button id="cancel__delete" >Cancel</button>
                    <button id="confirm__delete">Delete Account</button>
                </div>
            </div>

    
    `
    var ele=document.getElementById('delete__button__function')
    if(ele.style.display=="none")
    {
        ele.style.display="block";
       ele.innerHTML=html
     
    }
    else{
        ele.style.display="none"
    }
    document.getElementById('cancel__delete').addEventListener('click',()=>{
        ele.style.display="none"
    })
    document.getElementById('confirm__delete').addEventListener('click',()=>{
        ele.style.display="none"
    })
 }