import { cookies } from "next/headers";
import GetProfileInfo from "@/components/GetProfileInfo";

function Profile() {


  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore)

  
  return(

    <GetProfileInfo  token={{ name: 'token', value: '$cookieStore.value'}}/> 
  )
}

export default Profile;
