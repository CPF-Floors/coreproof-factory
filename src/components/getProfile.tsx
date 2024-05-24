import { cookies } from "next/headers";
import Dashboard from "./dashboard";


function GetProfile() {

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error getting the profile");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchProfile();

  return (
    <>
        <Dashboard token={token} fetchProfile={fetchProfile}/>
    </>
  );
}

export default GetProfile;
