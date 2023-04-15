import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContractorList from './components/contractors/ContractorList';
import EditContractor from './components/contractors/EditContractor';

function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <Router>
      <Routes>
        <Route path="/contractors" element={<ContractorList />} />
        <Route path="/contractors/:contractorId" element={<EditContractor />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
