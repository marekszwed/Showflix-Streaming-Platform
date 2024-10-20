import { createPortal } from 'react-dom';
import PortalModal from './components/LoginModal';

function App() {
	return <>{createPortal(PortalModal(), document.body)}</>;
}

export default App;
