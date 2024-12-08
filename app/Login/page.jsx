import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
  // const session = await getServerSession(authOptions);

  // // Perform the redirect if the user is already logged in
  // if (session) {
  //   // Redirect to the dashboard if the session exists
  //   redirect("/dashboard");
  // }

  // If no session, render the LoginForm
  return <LoginForm />;
}
