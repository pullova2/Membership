declare module "*.png" {
  const value: string;
  export default value;
}

declare module "remote/App" {
  const App: React.ComponentType;
  export default App;
}
