/**
 * Represents an asynchronous function that processes form data.
 * It receives the previous state and the submitted form data,
 * and returns a Promise that resolves to an object containing a message string.
 * despite the resolve and error of that action, we will be returning a message, thats the idea
 */

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
