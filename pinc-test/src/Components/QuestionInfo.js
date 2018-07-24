import React from 'react'

var styles = require('../Container/QuestionList.css')


const QuestionInfo = (props) => {
    const avatar_thumb = props.info.author_info.avatar_thumb;
    const title = props.info.text;
    const name = props.info.author_info.name;
    let comments = []
    for (let answer of props.info.latest_answerers_info) {
        comments.push(
            <span class="comment-image">
                <img src={answer.avatar_thumb} alt={answer.nickname} />
            </span>
        )
        //only show up to 4 images
        if (comments.length >= 4)
            break;
    }
    let comment_list
    //Only show the comments by when there are comments
    if (comments.length > 0) {
        comment_list = (
            <span className="comments">Comments By {comments}</span>
        );
    }

    return (
        <div class="question-info">
            <img className="question-info-img" src={avatar_thumb}></img>
            <div className="question-info-text">
                <div className="question-info-title"> {title} </div>
                <div className="question-info-post-by">
                    <span>Posted By
                        <span className="author-name"> {name}</span>
                    </span>
                    {comment_list}
                </div>
            </div>

        </div>
    )
};

export default QuestionInfo