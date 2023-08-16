import * as z from "zod";

export const createUserFormSchema = z.object({
    name: z
      .string()
      .nonempty('Please provide your friend\'s name.')
      .min(9, 'Friend\'s name must have at least 9 characters.')
      .refine(name => {
        const words = name.trim().split(' ');
        return words.length >= 2;
      }, 'Friend\'s name must contain at least 2 words.')
      .transform(name => {
        return name.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
        }).join(' ');
      }),
    email: z 
      .string()
      .nonempty('Please provide your friend\'s email.')
      .email('Format invalid.'),
    image: z
      .string()
      .nonempty('Please choose an image option.')
      .nonempty('Select an image option.') 
});