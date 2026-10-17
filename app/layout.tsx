import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DE EXCLUSIVE COLLECTION",
  description: "Discover our latest collection of meticulously crafted luxury pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Montserrat:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        {/* Force 2-column products on phones — highest priority */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media screen and (max-width: 900px) {
                .products-section .section {
                  padding: 50px 10px !important;
                }
                .products-grid {
                  display: flex !important;
                  flex-wrap: wrap !important;
                  gap: 8px !important;
                  width: 100% !important;
                  box-sizing: border-box !important;
                }
                .products-grid > .product-card {
                  flex: 0 0 calc(50% - 4px) !important;
                  width: calc(50% - 4px) !important;
                  max-width: calc(50% - 4px) !important;
                  min-width: 0 !important;
                  box-sizing: border-box !important;
                }
                .product-image-wrapper {
                  width: 100% !important;
                }
                .product-img {
                  width: 100% !important;
                  height: auto !important;
                  aspect-ratio: 3/4 !important;
                  object-fit: cover !important;
                }
                .product-info {
                  padding: 8px 6px !important;
                }
                .product-name {
                  font-size: 0.7rem !important;
                  line-height: 1.2 !important;
                }
                .product-brand {
                  font-size: 0.55rem !important;
                }
                .product-price {
                  font-size: 0.68rem !important;
                }
              }
              @media screen and (max-width: 480px) {
                .products-section .section {
                  padding: 40px 8px !important;
                }
                .products-grid {
                  gap: 6px !important;
                }
                .products-grid > .product-card {
                  flex: 0 0 calc(50% - 3px) !important;
                  width: calc(50% - 3px) !important;
                  max-width: calc(50% - 3px) !important;
                }
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
