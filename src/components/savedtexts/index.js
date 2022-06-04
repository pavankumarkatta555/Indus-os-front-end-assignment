import {Component} from 'react'
import * as Loader from 'react-loader-spinner'

import './index.css'

const emojis = require('emojis')

class SavedTexts extends Component {
  state = {
    savedTextsList: [],
    loaderStatus: false,
  }

  componentDidMount() {
    this.getSavedTexts()
  }

  getSavedTexts = async () => {
    this.setState({loaderStatus: true})

    const url = 'https://indus-os-assignment.herokuapp.com/savedtexts'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      this.setState({savedTextsList: data, loaderStatus: false})
    }
  }

  renderTexts = () => {
    const {savedTextsList} = this.state

    return (
      <div className="saved-texts-container">
        <ul>
          {savedTextsList.map(each => (
            <li>{emojis.unicode(each.savedtxt)}</li>
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader.ThreeDots color="#0b69ff" height="70" width="70" />
    </div>
  )

  render() {
    const {loaderStatus} = this.state

    return (
      <div className="saved-texts-bg">
        <nav className="nav-bg">
          <h1 className="nav-heading">Text to Emoji Saved Texts</h1>
        </nav>
        {loaderStatus ? this.renderLoader() : this.renderTexts()}
      </div>
    )
  }
}

export default SavedTexts
