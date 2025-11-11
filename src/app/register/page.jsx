import Register from "@/components/Auth/Register"


export const metadata = {
  title: "Register | SuperNPro Entertainment",
  description:
    "Create your SuperNPro account to unlock premium entertainment content, celebrity news, movies, pop culture updates and more.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "/register",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};



const page = () => {
  return (
    <>
    <Register/>
    </>
  )
}

export default page