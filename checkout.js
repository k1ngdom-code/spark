/*const imageSelction= document.getElementById("image")
const image= document.getElementById("image")
*/


const modal=document.getElementById("transfer-modal")
function openCheckout(){
    modal.style.transform="translate(50px ,20px) scale(1)";
}

const notificationdiv= document.getElementById("notificationdiv")
const checkoutdiv= document.getElementById("checkoutdiv")
const backbtn= document.getElementById("back")

const paid= document.getElementById("paid")
paid.addEventListener("click", function(){
    modal.style.transform="translate(50px, 20px) scale(0)"
notificationdiv.style.display="block"
checkoutdiv.style.display="none"
backbtn.style.display="block"
})

emailjs.init("my user id")
/*document.getElementById("image").addEventListener("change", function(event){
const file= event.target.files[0]
if(file){
    const reader= new FileReader()
    reader.onload= function(e){
        document.getElementById("imagepreview").src= e.target.result
    }
    reader.readAsDataURL(file)
}
})
*/

/*const imageUpload= document.getElementById("imageupload")
const preview= document.getElementById("imagepreview")

imageUpload.addEventListener('change', function(e){
    const file= e.target.files[0]
    if(file){
        const reader= new FileReader()
reader.onload= function(event){
    preview.src= event.target.result;
    
}
    }
reader.readAsDataURL(file)
})
*/
 