import { cookies } from "next/headers";
import GetProfileInfo from "./GetProfileInfo";

interface CookieStore {
  // Define properties and their types here
  // Example:
  get(key: string): { value?: string; } | null;
}

function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  console.log(cookieStore);

  return (
    <GetProfileInfo cookieStore={{cookieStore}} token={token}/> 
  );
}

export default Profile;
