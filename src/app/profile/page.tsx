import { cookies } from "next/headers";
import GetProfileInfo from "@/components/GetProfileInfo";

function Profile() {


  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore)

  
  return(

    <h1>Profile</h1>
  )
}

export default Profile;
