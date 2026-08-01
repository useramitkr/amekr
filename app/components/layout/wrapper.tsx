import Header from "./header";
import Footer from "./footer";
import { WrapperProps } from "../../typescript/layout.types";

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
