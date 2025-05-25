import {z} from 'zod'

export const companySchema = z.object({
    name: z.string().min(2, "Company name must be at least 2 characters long"),
    location: z.string().min(1, "Location must be defined"),
    about: z.string().min(10, "Please provide a brief description of the company").max(500, "Description must be less than 500 characters"),
    logo: z.string().url("Logo must be a valid URL").min(1, "Please upload the company logo"),
    website: z.string().url("Website must be a valid URL").min(1, "Please provide the company website"),
    linkedInAccount: z.string().url("LinkedIn account must be a valid URL").optional(),
})