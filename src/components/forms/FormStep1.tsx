
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema } from '@/lib/validation';
import { FormData } from '@/types/form';
import { trackEvent } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FormStep1Props {
  formData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
}

const FormStep1: React.FC<FormStep1Props> = ({ formData, onNext }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
    }
  });

  const onSubmit = (data: Partial<FormData>) => {
    trackEvent('form_step_completed', { step: 1 });
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              id="firstName"
              type="text"
              className="form-input"
              placeholder="John"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="form-input"
              placeholder="Doe"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="form-error">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="john.doe@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="form-error">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="(555) 123-4567"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="form-error">{errors.phone.message}</p>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full cta-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Continue'}
      </Button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        Your information is secure and will never be shared without your permission.
      </p>
    </form>
  );
};

export default FormStep1;
