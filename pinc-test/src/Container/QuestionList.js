import React, {Component} from 'react'
import Question from '../Components/Question'

const axios = require('axios')

class QuestionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://apinew.pincapp.com/api/questions")
            .then(
                (result) => {
                    this.setState({
                        questions: result.data.data,
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error: error
                    })
                }
            )

    }

    render() {
        const {questions, isLoaded, error} = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading... </div>
        } else {
            const questionList = questions.map((question) =>
                <Question key={question.id} question={question}></Question>
            );
            return questionList
        }
    }
}

export default QuestionList