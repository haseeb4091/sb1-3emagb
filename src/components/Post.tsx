import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const Post = ({ author, content, image, timestamp, likes: initialLikes, comments }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{author.name}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      <p className="text-gray-800 mb-4">{content}</p>

      {image && (
        <img
          src={image}
          alt="Post content"
          className="rounded-lg w-full object-cover mb-4"
        />
      )}

      <div className="flex items-center gap-6 pt-4 border-t">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${
            liked ? 'text-red-500' : 'text-gray-600'
          } hover:text-red-500 transition-colors`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;