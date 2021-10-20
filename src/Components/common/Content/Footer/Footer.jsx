import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    const url = 'https://reqres.in/api/users?page=2'
    fetch(url)
      .then((ali) => {
        return ali.json()
      })
      .then((res) => {
        console.log('res', res)
        this.setState({ list: res.data })
      })
  }
  render() {
    console.log('render---->', this.state.list)

    return (
      <div className="Footer-container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>avatar</th>
            </tr>
          </thead>
          {this.state.list.map((person, index) => (
            <tr>
              <td>{person.id}</td>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>
                <image>{person.avatar}</image>
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Footer
