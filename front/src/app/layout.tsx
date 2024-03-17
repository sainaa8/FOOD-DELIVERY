import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { CheckTokenProvider } from "@/components/ckeckToken/CheckToken";
import { SearchProvider } from "@/components/Provider/searchProvider";
import { BasketProvider } from "@/components/Provider/basketModalProvider";
export const metadata: Metadata = {
  title: "Food delivery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <BasketProvider>
          <SearchProvider>
            <CheckTokenProvider>
              <Header />
              {children}
              <Footer />
            </CheckTokenProvider>
          </SearchProvider>
        </BasketProvider>
      </body>
    </html>
  );
}
