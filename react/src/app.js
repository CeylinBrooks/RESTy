import React from 'react';
import Form from '.form.js'
import './style.scss';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      count: 0,
      results: []
    }
  }

  toggleLoading = () => {
    this.setState({ count, results});
  }
  render() {
    return(
      <>
      <Form prompt="GET POST PUT PATCH DELETE" toggleLoading={this.toggleLoading} handler={this.handleForm} />
      </>
    )
  }

}

// const Header = () => {
//   return (
//     <header>
//       <h1> React App</h1>
//       <nav>
//         <ul>
//           <li>GET</li>
//           <li>POST</li>
//           <li>PUT</li>
//           <li>DELETE</li>
//         </ul>
//       </nav>   
//     </header>
//   )
// }


// handleChange = e => {
//   let words = e.target.value;
//   this.setState({ words });
// }