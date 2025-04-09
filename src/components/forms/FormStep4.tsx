
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insuranceKnowledgeSchema } from '@/lib/validation';
import { FormData } from '@/types/form';
import { trackEvent } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormStep4Props {
  formData: Partial<FormData>;
  onComplete: (data: Partial<FormData>) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const FormStep4: React.FC<FormStep4Props> = ({ 
  formData, 
  onComplete, 
  onBack,
  isSubmitting 
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(insuranceKnowledgeSchema),
    defaultValues: {
      insuranceKnowledge: formData.insuranceKnowledge || undefined,
    }
  });

  const onSubmit = (data: Partial<FormData>) => {
    trackEvent('form_completed', { step: 4 });
    onComplete(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-4">
        <label className="form-label text-center block">
          Do you know what kind of life insurance you're looking for?
        </label>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-neon-teal transition-colors">
            <input
              type="radio"
              value="yes"
              className="form-radio text-neon-teal"
              {...register('insuranceKnowledge')}
            />
            <div>
              <span className="font-medium">Yes</span>
              <p className="text-sm text-gray-500">I know what coverage I need</p>
            </div>
          </label>
          
          <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-neon-teal transition-colors">
            <input
              type="radio"
              value="no"
              className="form-radio text-neon-teal"
              {...register('insuranceKnowledge')}
            />
            <div>
              <span className="font-medium">No</span>
              <p className="text-sm text-gray-500">I need guidance on options</p>
            </div>
          </label>
          
          <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-neon-teal transition-colors">
            <input
              type="radio"
              value="unsure"
              className="form-radio text-neon-teal"
              {...register('insuranceKnowledge')}
            />
            <div>
              <span className="font-medium">Unsure</span>
              <p className="text-sm text-gray-500">I'd like to explore all options</p>
            </div>
          </label>
        </div>
        
        {errors.insuranceKnowledge && (
          <p className="form-error text-center">{errors.insuranceKnowledge.message}</p>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          type="button" 
          variant="outline"
          onClick={onBack}
          className="w-full"
          disabled={isSubmitting}
        >
          Back
        </Button>
        
        <Button 
          type="submit" 
          className="w-full cta-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Get My Quote'}
        </Button>
      </div>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default FormStep4;
