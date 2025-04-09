
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { coverageDetailsSchema } from '@/lib/validation';
import { FormData } from '@/types/form';
import { trackEvent } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormStep3Props {
  formData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, onNext, onBack }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(coverageDetailsSchema),
    defaultValues: {
      coverageAmount: formData.coverageAmount || '',
      zipCode: formData.zipCode || '',
    }
  });

  const onSubmit = (data: Partial<FormData>) => {
    trackEvent('form_step_completed', { step: 3 });
    onNext(data);
  };

  const coverageOptions = [
    { value: "100000", label: "$100,000" },
    { value: "250000", label: "$250,000" },
    { value: "500000", label: "$500,000" },
    { value: "750000", label: "$750,000" },
    { value: "1000000", label: "$1,000,000" },
    { value: "2000000", label: "$2,000,000" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-6">
        <div>
          <label htmlFor="coverageAmount" className="form-label">Desired Coverage Amount</label>
          <select
            id="coverageAmount"
            className="form-input"
            {...register('coverageAmount')}
          >
            <option value="">Select coverage amount</option>
            {coverageOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.coverageAmount && (
            <p className="form-error">{errors.coverageAmount.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="zipCode" className="form-label">ZIP Code</label>
          <input
            id="zipCode"
            type="text"
            className="form-input"
            placeholder="12345"
            maxLength={5}
            {...register('zipCode')}
          />
          {errors.zipCode && (
            <p className="form-error">{errors.zipCode.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          type="button" 
          variant="outline"
          onClick={onBack}
          className="w-full"
        >
          Back
        </Button>
        
        <Button 
          type="submit" 
          className="w-full cta-button"
          disabled={isSubmitting}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default FormStep3;
