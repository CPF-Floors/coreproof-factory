"use client"
import Profile from "../app/profile/page"

function GetProfileInfo({token}) {


  // const fetchProfile = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/auth/profile", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Error getting the profile");
  //     }
  //     const data = await response.json();
  //     console.log(data)
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // fetchProfile()

  return ( 
  <h1>Profile</h1>
 );
}

export default GetProfileInfo;