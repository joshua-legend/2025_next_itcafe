const Text = ({ children, className = "", Component = "p" }) => {
  return <Component className={`${className}`}>{children}</Component>;
};

export default Text;
