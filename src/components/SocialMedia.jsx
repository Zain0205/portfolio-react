export default function SocialMedia({ children }) {
  return (
    <div className="mr-3 shadow-md shadow-dark cursor-pointer border border-black hover:border-primary hover:bg-primary p-2 rounded-full group">
      <div className="text-2xl group-hover:text-white flex items-center justify-center">{children}</div>
    </div>
  );
}
