
import { z } from 'zod';

// Step 1 validation schema - Personal Info
export const personalInfoSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .refine((val) => /^[0-9]+$/.test(val), { 
      message: "Phone number can only contain digits" 
    }),
});

// Step 2 validation schema - Health Details
export const healthDetailsSchema = z.object({
  age: z.coerce.number()
    .min(18, { message: "Must be at least 18 years old" })
    .max(85, { message: "Must be 85 or younger" }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  smoker: z.enum(["yes", "no"], {
    required_error: "Please indicate if you're a smoker",
  }),
});

// Step 3 validation schema - Coverage Details
export const coverageDetailsSchema = z.object({
  coverageAmount: z.string().min(1, { message: "Coverage amount is required" }),
  zipCode: z.string()
    .min(5, { message: "ZIP code must be 5 digits" })
    .max(5, { message: "ZIP code must be 5 digits" })
    .refine((val) => /^\d{5}$/.test(val), { 
      message: "ZIP code must be 5 digits" 
    }),
});

// Step 4 validation schema - Insurance Knowledge
export const insuranceKnowledgeSchema = z.object({
  insuranceKnowledge: z.enum(["yes", "no", "unsure"], {
    required_error: "Please select an option",
  }),
});

// Combined schema for final form submission
export const fullFormSchema = personalInfoSchema
  .merge(healthDetailsSchema)
  .merge(coverageDetailsSchema)
  .merge(insuranceKnowledgeSchema);
