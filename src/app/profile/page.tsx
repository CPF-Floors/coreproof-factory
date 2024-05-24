import { cookies } from "next/headers";
import GetProfileInfo from "./GetProfileInfo";

function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);

  return (
    <GetProfileInfo cookieStore={{cookieStore}} token={token}/> 
  );
}

export default Profile;
