import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>hihi</div>
      <button className="modalButton" onClick={() => setShowModal(true)}>
        Modal
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
