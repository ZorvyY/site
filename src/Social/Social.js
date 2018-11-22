import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => (
    <div className='social-container'>
        {
            [
                ['github', 'https://github.com/ZorvyY'],
                ['linkedin', 'https://linkedin.com/in/zoravur-singh'],
            ].reverse().map(name => 
                
                <div key={name[0]} className="social-container">
                    <a className='social-icon' href={name[1]} >
                        <FontAwesomeIcon icon={['fab', name[0]]} />
                    </a>
                </div>

            )
        }
    </div>
)

export default Social;