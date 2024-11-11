import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import GroupScreen from './components/GroupScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        
        <main className="ml-64">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/groups" element={<GroupScreen />} />
              <Route path="/profile" element={<div className="p-8">Profile page (coming soon)</div>} />
              <Route path="/settings" element={<div className="p-8">Settings page (coming soon)</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;