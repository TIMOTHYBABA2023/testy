import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import type { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-gray-900">{review.reviewerName}</h4>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{review.project}</span>
            <span>•</span>
            <span>{review.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
      <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
      <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
    </div>
  );
};