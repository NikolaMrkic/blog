import {
  React,
  Field,
  reduxForm,
  Button,
  useHistory,
  useDispatch,
  Form,
  Message,
} from "../../global";
import { renderTextArea } from "./CustomInputs";

// probati sa let blog form
let BlogForm = (props) => {
  //   const dispatch = useDispatch();
  //   let history = useHistory();
  console.log("props", props);

  const onSubmitForm = (values) => {
    // const editableForm = props.editableForm;
    console.log("valuesSSSSSSSSSSSSSSSSSSSSSSSs", values);
    // if (editableForm) {
    //   dispatch(USER_ADMIN.requestOne(values));
    // } else {
    //   dispatch(USER_ADMIN.save(values));
    //   history.push("/users");
  };

  const { handleSubmit, closeModal } = props;
  return (
    <div className="blogFormWrapper">
      <Form onSubmit={handleSubmit(onSubmitForm)}>
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
            name="description"
            component={renderTextArea}
            type="text"
            placeholder="Text of the post"
          />
        </div>
        <div className="blogFormButtons">
          <Button secondary type="primary" htmlType="submit">
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
