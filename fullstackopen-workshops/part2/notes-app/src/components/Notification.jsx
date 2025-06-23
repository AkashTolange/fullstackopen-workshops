const Notification = ({ message }) => {
  //     return (
  //         <>
  //         <div className="error">
  //             {message}
  //         </div>
  //         </>
  //     );
  // }

    return message ? <div className="error">{message}</div> : null;

  // if (!message) {
  //   return null;
  // }
  // return <div className="error">{message}</div>;
};

export default Notification;
