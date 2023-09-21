const Notification = (props) => {
  //  Write your code here.
  const { className, name, imageUrl } = props;
  return (
    <div className={className}>
      <img src={imageUrl} />
      <p className="paragraph">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        className="info-message"
        name="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-message"
        name="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-message"
        name="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-message"
        name="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
