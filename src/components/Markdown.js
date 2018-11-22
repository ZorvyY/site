import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'


// Takes Markdown URL and returns react element with the markdown in it.
class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: null
        }
    }

    componentDidMount() {
        const path = this.props.path;

        fetch(path).then((response) => response.text()).then((text) => {
            this.setState({ markdown: text });
        })
    }

    render() {
        return (
            <div className="content">
                <ReactMarkdown source={this.state.markdown} />
            </div>
        )
    }
}

export default Markdown;