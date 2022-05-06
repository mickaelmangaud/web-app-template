interface ILayout {
  children: React.ReactChild;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
