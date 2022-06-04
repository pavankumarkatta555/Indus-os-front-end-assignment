import {Component} from 'react'

import './index.css'

const emojis = require('emojis')

class Home extends Component {
  state = {
    inputText: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {inputText} = this.state

    const url = 'https://indus-os-assignment.herokuapp.com/'

    if (inputText === '') {
      alert('Please enter text')
    }

    const savedText = {savedtxt: inputText}

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(savedText),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      console.log(response.status)
    }

    this.setState({inputText: ''})
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeTextArea = () => {}

  render() {
    const {inputText} = this.state

    return (
      <div className="home-bg">
        <nav className="nav-bg">
          <h1 className="nav-heading">Text to Emoji Converter</h1>
        </nav>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="input">Input Box</label>
          <input
            id="input"
            type="text"
            onChange={this.onChangeInput}
            placeholder="Enter text"
            value={inputText}
          />
          <p>Input example to get emoji :- :heart: </p>
          <button type="submit">Submit</button>
        </form>
        <div className="output-container">
          <label htmlFor="textarea">Output</label>
          <textarea
            id="textarea"
            value={emojis.unicode(inputText)}
            onChange={this.onChangeTextArea}
          >
            {emojis.unicode(inputText)}
          </textarea>
        </div>
        <div className="output-container">
          <p>
            Click on the{' '}
            <a
              target="__blank"
              href="https://www.webfx.com/tools/emoji-cheat-sheet/"
            >
              Cheat Sheet
            </a>{' '}
            to see more emojis text
          </p>
        </div>
      </div>
    )
  }
}

export default Home
