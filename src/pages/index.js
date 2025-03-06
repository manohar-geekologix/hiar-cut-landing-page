import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Home from "./Home";
export default function Index() {
  return (
    <main className={` ${inter.className}`}>
      <Home></Home>
      
    </main>
  );
}
