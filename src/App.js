import Layout from "./comps/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import "./service/firebase";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
