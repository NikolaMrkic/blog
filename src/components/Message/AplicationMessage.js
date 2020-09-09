import { React, useState, Message, Button, Modal, Header } from "../../global";
import BlogForm from "../Form/BlogForm";
import blogs from "../Blog/BlogCard";

const AplicationMessage = () => {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

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
            onClose={() => setIsVisibleModal(false)}
          >
            <Header icon="archive" content="Add / Edit blog post" />
            <BlogForm closeModal={closeModal} />
            {/* <Modal.Actions>
              <Button secondary>Post</Button>
              <Button secondary>Cancel</Button>
            </Modal.Actions> */}
          </Modal>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AplicationMessage;
