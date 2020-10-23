import { React, Field, reduxForm, Button, Form } from "../../../global";
import { renderTextArea } from "./CustomInputs";

let BlogForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="blogFormWrapper">
      <Form onSubmit={handleSubmit}>
        <div>
          <Field
            required
            label="Title"
            name="title"
            component={Form.Input}
            type="text"
            placeholder="Title of the post"
          />
          <Field
            label="Text"
            name="text"
            component={renderTextArea}
            type="text"
            placeholder="Text of the post"
          />
        </div>
        <div className="blogFormButtons">
          <Button secondary type="primary">
            Post
          </Button>
          <Button secondary onClick={props.closeModal}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

// redux-form
BlogForm = reduxForm({
  form: "blogForm",
})(BlogForm);

export default BlogForm;
