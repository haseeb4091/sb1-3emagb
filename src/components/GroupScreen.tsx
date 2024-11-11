import React, { useState } from 'react';
import { Search, Users, Plus, Settings } from 'lucide-react';
import CreateGroupModal from './CreateGroupModal';
import GroupHomePage from './GroupHomePage';

const GroupScreen = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const groups = [
    {
      id: 1,
      name: 'Web Developers Hub',
      description: 'A community for web developers to share knowledge and experiences',
      members: 1234,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'UI/UX Design Group',
      description: 'Share and discuss UI/UX design trends and best practices',
      members: 856,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300',
      isAdmin: false,
    },
    {
      id: 3,
      name: 'Tech Startup Network',
      description: 'Connect with other startup founders and entrepreneurs',
      members: 2341,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300',
      isAdmin: false,
    },
  ];

  const suggestedGroups = [
    {
      id: 4,
      name: 'Mobile App Developers',
      members: 945,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300',
    },
    {
      id: 5,
      name: 'Digital Marketing Pros',
      members: 1123,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300',
    },
  ];

  const handleCreateGroup = (groupData: any) => {
    console.log('New group data:', groupData);
    // Here you would typically make an API call to create the group
  };

  if (selectedGroup) {
    return <GroupHomePage groupId={selectedGroup} />;
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Groups</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Group
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search groups..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
      </div>

      {/* My Groups */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">My Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedGroup(group.id)}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{group.name}</h3>
                  {group.isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add admin actions here
                      }}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {group.members.toLocaleString()} members
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Groups */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Suggested Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedGroup(group.id)}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{group.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {group.members.toLocaleString()} members
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add join group logic here
                    }}
                    className="text-sm text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreateGroupModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateGroup}
      />
    </div>
  );
};

export default GroupScreen;