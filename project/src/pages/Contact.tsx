import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

export const Contact: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            <span>tiwariar_9@rknec.edu</span>
          </div>
          
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-blue-600 mr-3" />
            <span>9373610991</span>
          </div>
          
          <div className="flex items-center">
            <Linkedin className="w-6 h-6 text-blue-600 mr-3" />
            <a
              href="https://www.linkedin.com/in/arman-rajeshprasad-tiwari-119231289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Leave a Review
          </h2>
          
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>{rating} Stars</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};