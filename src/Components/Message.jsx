const massageImage = require('../images/796_oooo.plus.png');

export default function Message() {
  return (
    <div className="message message--hidden">
      <div className="message__input">
        <img className="message__input-image" src={massageImage} alt="message__image" />
        <div className="message__input-text">
          Currency added
          {' '}
          <br />
          {' '}
          successfully
        </div>
      </div>
    </div>
  );
}
