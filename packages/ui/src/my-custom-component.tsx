export const MyCustomComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>MyCustomComponent Component</h1>
      {children}
    </div>
  );
};
