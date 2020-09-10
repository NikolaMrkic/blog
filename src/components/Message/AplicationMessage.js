import {
  React,
  useState,
  Message,
  Button,
  Modal,
  Header,
  useEffect,
} from "../../global";
import BlogForm from "../Form/BlogForm";
import blogs from "../Blog/BlogCard";

let AplicationMessage = (props) => {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isEditabileForm, setEditabileForm] = useState(false);
  const [isBlogForEdit, setBlogForEdit] = useState({});

  useEffect(() => {
    const { showModal, editabileForm, blogForEdit } = props;
    //open modal from blog card component with edit button
    setIsVisibleModal(showModal);
    setEditabileForm(editabileForm);
    setBlogForEdit(blogForEdit);
  }, [props]);

  const handleDismiss = () => {
    setIsVisibleMessage(false);

    setTimeout(() => {
      setIsVisibleMessage(true);
    }, 2000);
  };

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const closeModal = () => {
    setIsVisibleModal(false);
    setBlogForEdit({});
  };

  if (isVisibleMessage) {
    return (
      <div>
        <div>
          <h4>Welcome to my Blog!</h4>
          <Message
            onDismiss={handleDismiss}
            content="Container for showing application messages."
          />
        </div>

        <div className="blogPost-addButton">
          <Button secondary onClick={showModal}>
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
