import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login | SuperNPro Entertainment ",
  description:
    "Access your SuperNPro account to enjoy exclusive celebrity news, entertainment updates, movies, pop culture and more.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "/login",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};




const page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default page;
