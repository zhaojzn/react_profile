import React from 'react';
import axios from 'axios';


const fetchList = async () =>{
    const res = await axios.get("https://tkqsfeuua3.execute-api.us-east-1.amazonaws.com/amountopened");
    console.log(res);
    return res.data.amount;
  }

  
class Amount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {json: ""}; 
    }

    componentDidMount() {
        this.apiCall().then(result => this.setState({
          json: result
        }))
      }
      
      apiCall(){
        return fetchList()
      }
    render(){
    return (
        <p>This website has been opened {this.state.json} times </p>
     );
    }
}

export default Amount;