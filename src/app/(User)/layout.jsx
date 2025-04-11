import { Metadata } from "next";


export const metadata = {
  title: "Travories",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}) {
  return (
      <div className="bg-gray-10 w-full">
        hello
         {children}
         </div>
  );
}
