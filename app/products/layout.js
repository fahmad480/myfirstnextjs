export const metadata = {
  title: "Product",
  description: "Product List",
};

export default function ProductLayout({ children }) {
  return <div className="py-10 px-10">{children}</div>;
}
