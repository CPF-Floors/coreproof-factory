import { cookies } from "next/headers";
import GetProfileInfo from "./GetProfileInfo";


interface token {
  name: string,
  value: string
}

function Profile() {

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);

  return (
    <GetProfileInfo token={token}/> 
  );
}

export default Profile;
