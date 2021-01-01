
function enable__fasting()
{
    var html=""
    html+=`<div id="cross__icon" class="cross__icon"><i onClick="cross__function()" class="fas fa-times"></i></div>
            <div class="cronmeter__image"><img src="https://cdn1.cronometer.com/logos/cronometer-logo-gold.png"/><p>Gold</p></div>
            <div><h3>Fasting is a feature exclusive to Gold subscribers.</h3></div>
            <div>Fasting is a feature exclusive to Gold subscribers.</div>
            <div>With Gold, you can track your fasts and view how fasting correlates with your nutrition.</div>
            <div>Plus, you'll gain access to all our premium features!</div>
            <div><a href="plan.html"><button>See All Features</button><a/></div>
    `
    var ele=document.getElementById('popup__fasting')
    if(ele.style.display=='none')
    {
        ele.innerHTML=html
        ele.style.display="block"
    }
    else{
        ele.style.display="none"
    }
}
 function cross__function()
 {
     var ele=document.getElementById('popup__fasting')
     ele.style.display="none"
 }