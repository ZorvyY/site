import React from 'react';
import Card from './Card'

class Portfolio extends React.Component {
    render(items) {
        return items.map(item => <Card info={item}/>)
    }
}

export default Portfolio;