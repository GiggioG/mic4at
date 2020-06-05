chrome.runtime.onMessage.addListener((mess,auth,resp)=>{
  if(mess=="send"){
    alert("reee");
  }
});