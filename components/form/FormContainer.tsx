"use client";

import { useActionState } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
const initialState = {
  message: "",
};

/**
 * A reusable container for handling form submissions using React Server Actions.
 * It uses `useActionState` to manage the state after the action runs.
 *
 * Props:
 * - `action`: The Server Action function to call on form submit (type: `actionFunction`).
 * - `children`: The form elements to render inside this container.
 *
 * State:
 * - `state`: Holds the result from the Server Action (initialized with `initialState`).
 * - `formAction`: The function to pass to the `<form>`'s `action` prop.
 */
const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  // `useActionState` links the 'action' function to the form
  // and updates 'state' with the result after submission.
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  // The 'action' prop of the form is set to 'formAction'
  // to trigger the Server Action on submit.
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
