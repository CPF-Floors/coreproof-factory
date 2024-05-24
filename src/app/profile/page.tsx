import { cookies } from "next/headers";
import GetProfileInfo from "./GetProfileInfo";
import LogOutButton from "@/components/LogOutButton";

interface token {
  name: string;
  value: string;
}

function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);
  

  return (
    <>
      <GetProfileInfo token={token} />
      <LogOutButton />
      
    </>
  );
}

export default Profile;
