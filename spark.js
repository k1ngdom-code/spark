 
/*const usersname=document.getElementById("username").value
const usersemail= document.getElementById('emailAddress').value
const sendbtn= document.getElementById("send")
 
const emailVal= usersemail.value
const usernameVal= usersname.value
const course= document.getElementById("course")
sendbtn.addEventListener("click", send)


function send() {
  (function () {
    emailjs.init({
      publicKey: "SpKhcteWUt8AsYi8Z",
    });
  })();
const imageSrc= document.getElementById("imagepreview")

  let data = {
    username: usernameVal,
    course: course.innerHTML + `${emailVal}`,
    email: emailVal
  };

  // Send EmailJS email
  emailjs.send("service_zt27euc", "template_a61ubhu", data)
    //.then(() => alert("Uploaded Successfully"))
    .then(() => console.log(imageSrc))
.then(() => console.log(usersname));
  

   // Create canvas to draw the image
    const canvas = document.createElement("canvas");
    canvas.width = imageSrc.naturalWidth;
    canvas.height = imageSrc.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageSrc, 0, 0);

    // Convert to base64
    const base64Image = canvas.toDataURL("image/png");

//Store in db

   set(ref(db, "user/" + usernameVal), {
    username: usernameVal,
        email: emailVal,
       image: base64Image,
       timestamp: Date.now()
      }) .then(() => alert("Done Successfully"))




  // Telegram bot messaging
  // Send message & image to Telegram
  
  
  
  
  
  
  /*await sendTelegramNotification(usernameVal, emailVal, imageSrc);

  alert('Notification sent to Telegram!');
}

// Convert base64 image string to Blob
function dataURLtoBlob(dataURL) {
  const parts = dataURL.split(';base64,');
  const mime = parts[0].split(':')[1];
  const binary = atob(parts[1]);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) array[i] = binary.charCodeAt(i);
  return new Blob([array], { type: mime });
}

// Send to Telegram using FormData
async function sendTelegramNotification(name, email, imageSrc) {
  const bottoken = '7600641037:AAEBZgxfJ6O-mMjEC3-Uf3s6pSQiaC_MEas';
  const chatId = '6629815732';
const messageText = `📬 New Submission\nName: ${name}\nEmail: ${email}`;

  const blob = dataURLtoBlob(imageSrc);
  const formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("caption", messageText);
  formData.append("photo", blob, imageSrc);

  const response = await fetch(`https://api.telegram.org/bot${bottoken}/sendPhoto`, {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  console.log("Telegram response:", result);*/



/*  
  await sendTelegramNotification(usersname, emailVal, imageSrc); // imageSrc = imageSrc
  alert('Notification sent!');
}

// Telegram function (inside or outside `send`, both work)
async function sendTelegramNotification(name, email, imageData) {
  const bottoken = '7600641037:AAEBZgxfJ6O-mMjEC3-Uf3s6pSQiaC_MEas';
  const chatId = '6629815732';

  const messageText = `📬 New Submission\nName: ${name}\nEmail: ${email}`;

  if (imageData.length < 5 * 1024 * 1024) {
    await fetch(`https://api.telegram.org/bot${bottoken}/sendPhoto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        caption: messageText,
        photo: imageData
      })
    });
  } else {
    await fetch(`https://api.telegram.org/bot${bottoken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText + "\n[Image too large to attach]"
      })
    });
  }*/

