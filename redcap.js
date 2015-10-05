console.log('redcap.js loaded')

redcap=function(){}

redcap.buildUI=function(id){
    if(!id){id='redCapDiv'}
    redcap.id=id
    if(!document.getElementById(redcap.id)){
        $('<div id="'+redcap.id+'"></div>').appendTo(document.body)
        console.log('root div not found, one was created with id "'+redcap.id+'"')
    }
    redCapDiv.innerHTML=':-)' 
    redcap.login()
}


redcap.login=function(){
    var lg = document.createElement('div')
    lg.id='loginREDCapDiv'
    lg.innerHTML='<form autocomplete="on" onsubmit="return false"><h4>API connection</h4><table><tr><td>URL :&nbsp;</td><td><input id="loginREDCapURL" autocomplete="on" value="https://redcap.stonybrookmedicine.edu/redcap/api/" size=50></td></tr><tr><td>KEY :&nbsp;</td><td><input id="loginREDCapKey" type="password" size=30> <input id="loginREDCapCheck" type="checkbox"> save</td></tr></table>&nbsp;<p><input type="submit" id="loginREDCapSubmit" value="Connect"></p></form>'
    var div = document.getElementById(redcap.id)
    div.appendChild(lg)
    var key = sessionStorage.getItem("REDCapKey")
    if(key){
        loginREDCapKey.value=sessionStorage.getItem('REDCapKey')
        console.log("REDCaP API key retrieved from sessionStorage")
    }
    loginREDCapSubmit.onclick=function(){
        redcap.loginThen()
    }
}

redcap.loginThen=function(){
    if(loginREDCapCheck.checked){ // store key
        if(loginREDCapKey.value.length==0){ // key being removed by storing empty key
            sessionStorage.removeItem('REDCapKey')
            console.log("REDCaP API key removed from sessionStorage")
        }else{
            sessionStorage.setItem('REDCapKey',loginREDCapKey.value)
            console.log("REDCaP API key cached onto sessionStorage")
        }       
    }
    // connection
    if(loginREDCapKey.value.length>0){
        redcap.key=loginREDCapKey.value
    }
}

redcap.connect=function(){
    
}