// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  emojiButtonClick = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {!isTrue && (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <li className="emoji" key={eachEmoji.id}>
                  <button
                    type="button"
                    className="emoji-button"
                    onClick={this.emojiButtonClick}
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      className="image"
                      alt={eachEmoji.name}
                    />
                  </button>
                  <p className="emoji-description">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="card-container-popper">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="text">Thank You</h1>
            <p className="feedback-description">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
