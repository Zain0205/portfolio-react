function Button({ children }) {
  return <button className="px-4 py-2 text-white shadow-lg shadow-secondary border border-primary transition-colors duration-100 ease-out hover:bg-white hover:text-primary bg-primary font-semibold rounded-md">{children}</button>;
}

export default Button;
