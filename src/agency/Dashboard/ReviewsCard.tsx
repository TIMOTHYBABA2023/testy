import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Card } from '../../maintenance/Card';
import { averageRating, reviews } from '../data';
import { ReviewCard } from '../ReviewCard';

export const ReviewsCard: React.FC = () => {
  return (
    <Card>
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-3xl font-bold text-gray-900">{averageRating.score}</div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-6 w-6 ${i < Math.floor(averageRating.score) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600">Based on {averageRating.reviewCount} reviews</p>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-4">Recent Reviews</h3>
      <p className="text-sm text-gray-600 mb-6">Latest feedback from investors and clients</p>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Card>
  );
};