import { React, useState, Message, Button } from "../../global";

const AplicationMessage = () => {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true);

  const handleDismiss = () => {
    setIsVisibleMessage(false);

    setTimeout(() => {
      setIsVisibleMessage(true);
    }, 2000);
  };

  if (isVisibleMessage) {
    return (
      <div className="message-container">
        <h4>Welcome to my Blog!</h4>
        <Message
          onDismiss={handleDismiss}
          content="Container for showing application messages."
        />
        <div className="blogPost-addButton">
          <Button secondary>Add post</Button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AplicationMessage;
