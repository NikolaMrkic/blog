import { React, Input, Form, Label } from "../../global";

export const renderTextArea = (field) => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
    required
    rows={10}
    maxLength={700}
  />
);
