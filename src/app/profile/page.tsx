import { cookies } from "next/headers";
import GetProfileInfo from "@/components/GetProfileInfo";

function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);

  return (
    <GetProfileInfo cookieStore={{cookieStore}} /> 
  );
}

export default Profile;
