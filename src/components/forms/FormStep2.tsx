
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { healthDetailsSchema } from '@/lib/validation';
import { FormData } from '@/types/form';
import { trackEvent } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormStep2Props {
  formData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}

const FormStep2: React.FC<FormStep2Props> = ({ formData, onNext, onBack }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(healthDetailsSchema),
    defaultValues: {
      age: formData.age || undefined,
      gender: formData.gender || undefined,
      smoker: formData.smoker || undefined,
    }
  });

  const onSubmit = (data: Partial<FormData>) => {
    trackEvent('form_step_completed', { step: 2 });
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-6">
        <div>
          <label htmlFor="age" className="form-label">Age</label>
          <input
            id="age"
            type="number"
            className="form-input"
            placeholder="35"
            min="18"
            max="85"
            {...register('age', { valueAsNumber: true })}
          />
          {errors.age && (
            <p className="form-error">{errors.age.message}</p>
          )}
        </div>
        
        <div>
          <label className="form-label">Gender</label>
          <div className="grid grid-cols-3 gap-3 mt-2">
            <label className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-neon-teal transition-colors">
              <input
                type="radio"
                value="male"
                className="form-radio text-neon-teal"
                {...register('gender')}
              />
              <span>Male</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-neon-teal transition-colors">
              <input
                type="radio"
                value="female"
                className="form-radio text-neon-teal"
                {...register('gender')}
              />
              <span>Female</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-neon-teal transition-colors">
              <input
                type="radio"
                value="other"
                className="form-radio text-neon-teal"
                {...register('gender')}
              />
              <span>Other</span>
            </label>
          </div>
          {errors.gender && (
            <p className="form-error">{errors.gender.message}</p>
          )}
        </div>
        
        <div>
          <label className="form-label">Tobacco/Nicotine Use</label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <label className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-neon-teal transition-colors">
              <input
                type="radio"
                value="yes"
                className="form-radio text-neon-teal"
                {...register('smoker')}
              />
              <span>Yes</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-neon-teal transition-colors">
              <input
                type="radio"
                value="no"
                className="form-radio text-neon-teal"
                {...register('smoker')}
              />
              <span>No</span>
            </label>
          </div>
          {errors.smoker && (
            <p className="form-error">{errors.smoker.message}</p>
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

export default FormStep2;
