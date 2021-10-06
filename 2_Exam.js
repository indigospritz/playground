/**
 * if correct +4
 * if wrong -1
 * if blank 0
 * 
 * if final score < 0, then 0 else score
 * 
 */
const getScore = (correctAnswer, studentAnswers) => {   
    let correctItems = 0
    const newArr = []
    for (let i = 0; i < correctAnswer.length; i++) {
        for (let j = 0; j < studentAnswers.length; j++)
        if (correctAnswer[i] === studentAnswers[i]) {
            correctItems+=4
            newArr.splice(i, 0, correctAnswer[i])
            break
        }
    }
    console.log(correctItems)
}



    
    const answerKeys = ['a', 'd', 'b', 'e', 'c']
    // var checkSheet = new getScore()
    getScore(answerKeys, ['b', 'c', 'd', 'e', '']) // 1
    getScore(answerKeys, ['b', 'd', 'a', 'c', 'e']) // 1
    getScore(answerKeys, ['e', 'd', 'c', 'b', 'a']) // 1
    getScore(answerKeys, ['a', 'a', 'b', 'c', 'd']) // 2
