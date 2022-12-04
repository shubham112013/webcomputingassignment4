
import React, {Component} from 'react';
import Newss from './Newss';
    
class NewsApi extends Component {
    render() {
        return (<div>
        <meta http-equiv = "refresh" content = "60" />
            <Newss newss={this.state.newss} />
            </div>
        )
    }
    
    state = {
        newss: []
    };
 
    componentDidMount() {
        fetch("http://api.mediastack.com/v1/news?access_key=e50b9917df5da359b549b6b6a512a454&languages=en&keywords=esports&limit=3")
            .then(res => res.json())
            .then((res) => {
                this.setState({ newss: res.data })
            })
            .catch(console.log)
    }
}
 
export default NewsApi;