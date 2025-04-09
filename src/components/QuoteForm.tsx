
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData, FormStep } from '@/types/form';
import { submitLead } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';
import FormStep1 from './forms/FormStep1';
import FormStep2 from './forms/FormStep2';
import FormStep3 from './forms/FormStep3';
import FormStep4 from './forms/FormStep4';

const QuoteForm: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => (prev + 1) as FormStep);
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(prev => (prev - 1) as FormStep);
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = async (data: Partial<FormData>) => {
    const completeData = { ...formData, ...data } as FormData;
    
    setIsSubmitting(true);
    
    try {
      const response = await submitLead(completeData);
      
      if (response.success) {
        toast({
          title: "Quote request submitted!",
          description: "We'll be in touch with you shortly.",
          duration: 5000,
        });
        
        // Redirect to thank you page
        navigate('/thank-you');
      } else {
        toast({
          title: "Submission Error",
          description: response.error || "There was an error submitting your quote request. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${s === step ? 'bg-neon-teal text-charcoal' : 
                  s < step ? 'bg-neon-teal bg-opacity-30 text-charcoal' : 
                  'bg-gray-200 text-gray-500'}`}
            >
              {s < step ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            <span className="text-xs mt-1 hidden md:block">
              {s === 1 && "Personal"}
              {s === 2 && "Health"}
              {s === 3 && "Coverage"}
              {s === 4 && "Knowledge"}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="form-card animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h2>
      
      {renderStepIndicator()}
      
      {step === 1 && <FormStep1 formData={formData} onNext={handleNext} />}
      {step === 2 && <FormStep2 formData={formData} onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <FormStep3 formData={formData} onNext={handleNext} onBack={handleBack} />}
      {step === 4 && (
        <FormStep4 
          formData={formData} 
          onComplete={handleComplete} 
          onBack={handleBack}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default QuoteForm;
