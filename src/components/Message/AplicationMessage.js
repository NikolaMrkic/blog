import {
  React,
  useState,
  Message,
  Button,
  Modal,
  Header,
  useEffect,
  useDispatch,
} from "../../global";
import BlogForm from "../Form/BlogForm";
import BLOG from "../../redux/actions/index";

let AplicationMessage = (props) => {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isEditabileForm, setEditabileForm] = useState(false);
  const [isBlogForEdit, setBlogForEdit] = useState({});
  const [showMessages, setMessage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const { showModal, editabileForm, blogForEdit, blogsMessage } = props;
    setIsVisibleModal(showModal);
    setEditabileForm(editabileForm);
    setBlogForEdit(blogForEdit);
    showMessage(blogsMessage);
  }, [props]);

  const handleDismiss = () => {
    setIsVisibleMessage(false);
    setMessage("Container for showing application messages");

    setTimeout(() => {
      setIsVisibleMessage(true);
    }, 2000);
  };

  const showModalForPost = () => {
    setIsVisibleModal(true);
    setBlogForEdit({});
  };

  const closeModal = () => {
    setIsVisibleModal(false);
    setEditabileForm(false);
    setBlogForEdit({});
  };

  const handleSubmit = (values) => {
    if (isEditabileForm) {
      dispatch(BLOG.put(values));
      setIsVisibleModal(false);
    } else {
      dispatch(BLOG.save(values));
      setIsVisibleModal(false);
    }
  };

  const showMessage = (blogs) => {
    if (blogs && blogs.length > 0) {
      setMessage("Successfully returned blogs");
    } else {
      setMessage("No blogs");
    }
  };

  if (isVisibleMessage) {
    return (
      <div>
        <div>
          <h4>Welcome to my Blog!</h4>
          <Message onDismiss={handleDismiss} content={showMessages} />
        </div>

        <div className="blogPost-addButton">
          <Button secondary onClick={showModalForPost}>
            Add post
          </Button>
        </div>

        <div>
          <Modal
            size="small"
            closeIcon
            open={isVisibleModal}
            onClose={() => closeModal()}
          >
            <Header icon="archive" content="Add / Edit blog post" />
            <BlogForm
              onSubmit={handleSubmit}
              closeModal={closeModal}
              initialValues={isBlogForEdit}
              isEditabileForm={isEditabileForm}
            />
          </Modal>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AplicationMessage;
