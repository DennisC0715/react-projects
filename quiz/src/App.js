import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import { useGlobeContext } from "./context";

function App() {
  const { loading } = useGlobeContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SetupForm />
      <Modal />
    </>
  );
}

export default App;
