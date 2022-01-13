import React from 'react';

import QuestionAnswer from './question-answer/QuestionAnswer';
import DocumentRepository from './document-repository/DocumentRepository';

const components = {
    QuestionAnswer,
    DocumentRepository
}

function Components(props) {
    const Component = components[props.component];
    
    if(Component) return (
        <Component
            {...props}
        />
    );
    else return null;
}

export default Components;
