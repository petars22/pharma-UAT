import React from 'react';

function SimilarQuestion({similarQuestions, setAnswerId}) {
    const similarQuestionsArray = similarQuestions !== "" ? JSON.parse(similarQuestions) : [];

    return (
        <div className="table-column similar-question">
            {similarQuestionsArray.map(q => (
                <p
                    key={q.id}
                    onClick={() => setAnswerId(q.id)}
                >{q.text}</p>
            ))}
        </div>
    );
}

export default SimilarQuestion;