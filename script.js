async function loadUserDetails() {
  
    try {
      const response = await fetch('https://randomuser.me/api/');
      const json = await response.json();
      const user = json.results[0];
     
  
      const userImage = user.picture.large;
      const userName = `${user.name.first} ${user.name.last}`;
      const userEmail = user.email;
  
      document.getElementById("userImage").src = userImage;
      document.getElementById("userName").innerText = userName;
      document.getElementById("userEmail").innerText = userEmail;
    } catch (error) {
      console.error("Error fetching data", error);
    }
  } 