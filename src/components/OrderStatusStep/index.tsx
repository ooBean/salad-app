import React from 'react';

interface OrderStatusStepProps {
  step: string;
  description?: string;
  isActive: boolean;
  isCompleted: boolean;
}

const OrderStatusStep: React.FC<OrderStatusStepProps> = ({ step, description, isActive, isCompleted }) => {
  return (
    <div>
      <h4>{step}</h4>
      {description && <p>{description}</p>}
      <p>Status: {isCompleted ? 'Completed' : isActive ? 'In Progress' : 'Pending'}</p>
    </div>
  );
};

export default OrderStatusStep;
