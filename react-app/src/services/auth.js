export const authenticate = async() => {
  const response = await fetch('/api/auth/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


// export const signUp = async (username, email, password, profile_pic, fav_anime_id) => {
  
//   const formData = new FormData();
//   formData.append("username", username);
//   formData.append("email", email);
//   formData.append("password", password);
//   formData.append("fav_anime_id", fav_anime_id)
//   if (profile_pic) formData.append("profile_pic", profile_pic);
  
  
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     body: formData,
//     }),
//   return await response.json();
// }