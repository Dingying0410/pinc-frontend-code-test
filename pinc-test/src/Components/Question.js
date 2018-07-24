import React from 'react'
import GroupTitle from './GroupTitle'
import QuestionInfo from './QuestionInfo'
import Input from './Input'

var styles = require('../Container/QuestionList.css')
const Question = (props) => {
    const attributes = props.question.attributes
    return (
        <div className="question-box">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <GroupTitle title = {attributes.group[0].title}/>
                </div>
                <div className="panel-body">
                    <div style={{borderBottom: 1+'px solid lightgray'}}>
                        <QuestionInfo info = {attributes}/>
                    </div>
                    <div style={{marginTop: 10+'px'}}>
                        <Input type="form-control input-lg" reminder="Post Your Thought"/>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Question