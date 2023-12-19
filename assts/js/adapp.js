const addData = {
    title:"Office is open.",
    imageUrl:"img/img1.png",
    contactInfo:"0158526666",
    whatsapp:""    
};
document.getElementsByClassName("adArea")[0].innerHTML = ` <img src="${addData.imageUrl}" height="100px" width="100%">`;