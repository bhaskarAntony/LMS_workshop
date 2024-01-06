import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Database/firebase';
import './style.css'
import { Button } from '@mui/material';
import Appbar from '../Appbar/Appbar';
import { useParams } from 'react-router-dom';




function Test() {

    const {id} = useParams()
    console.log("mm", id)
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState("")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              resolve(user);
              unsubscribe(); // Unsubscribe to avoid memory leaks
            });
          });
    
          if (user) {
            setUserId(user);
            console.log("uid", user.uid); // Log the user ID after setting it
          } else {
            console.log("user is logged out");
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };
    
      fetchData();
    }, [])

    useEffect(() => {
        axios.get(`https://dull-trousers-deer.cyclic.app/api/assessments/${id}`)
          .then(response => {
            const shuffledQuestions = shuffleArray(response.data.assessments);
            console.log(response.data.assessments);
            const selectedQuestions = shuffledQuestions.slice(0, 10);
            setQuizData(selectedQuestions);
          })
          .catch(error => {
            alert('Error fetching quiz data:', error.message);
            console.log(error);
          });
      }, []);
      

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswerSelection = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let totalScore = 0;
      for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].options[quizData[i].answer - 1]) {
          totalScore++;
        }
      }
      setScore(totalScore);
      setIsQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitTest = () => {
    const userResponses = quizData.map((question, index) => ({
      question: question.question,
      correctAnswer: question.options[question.answer - 1],
      userAnswer: userAnswers[index],
    }));

    const userData = {
      name: "userName",
      email: userId.email,
      score: score,
      responses: userResponses,
      userId: userId.uid,
    };

    axios.post('https://dull-trousers-deer.cyclic.app/api/addScores', userData)
      .then(response => {
        console.log('Test results submitted successfully:', response.data);
        // You can add any additional logic or UI updates here
        alert("thanks you")
      })
      .catch(error => {
        console.error('Error submitting test results:', error.message);
        alert(error.message)
        // Handle errors or show error messages to the user
      });
  };

  return (
  <div className="test-container container-fluid ">
     <div className="row">
     <div className="col-12 col-md-3 col-lg-2 m-0 p-0  d-lg-block d-none d-sm-none d-md-block">
                <div className="sidebar p-2">
                  <div className="logo p-3">
                    <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" width={180} />
                  </div>
                     
                        <ul>
                            <li><a href=""><i class="bi bi-house text-main mx-2"></i>Home</a></li>
                            <li><a href=""><i class="bi bi-award-fill text-main mx-2"></i>Webinars</a></li>
                            <li><a href=""><i class="bi bi-clock text-main mx-2"></i>Start Learning</a></li>
                            <li><a href=""><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href=""><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href=""><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href=""><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>
                            <h3 className="fs-5 text-secondary fw-light mx-2 mt-3">Settings</h3>
                            <li><a href=""><i class="bi bi-journal-album text-main mx-2"></i>Digital Library</a></li>
                            <li><a href=""><i class="bi bi-card-checklist text-main mx-2"></i>Assaignments</a></li>
                            <li><a href=""><i class="bi bi-braces text-main mx-2"></i>Marathons</a></li>
                            <li><a href=""><i class="bi bi-body-text text-main mx-2"></i>Hackathons</a></li>

                        </ul>
                       
                </div>
            </div>
        <div className="col-12 col-sm-12 col-md-10 h-100 p-0 m-0">
            <Appbar/>
        <div className="main-mcq">
        <div className='p-3 mt-0'>
        {!isQuizCompleted ? (
        <div>
          <p className='fs-4 text-main-danger'> {currentQuestion + 1}) {quizData[currentQuestion]?.question}</p>
          {quizData[currentQuestion]?.options.map((option, index) => (
            <div key={index} className="q-option">
              <input
                type="radio"
                name="quizOption"
                className='text-900 fs-5 mx-2'
                value={option}
                onChange={() => handleAnswerSelection(option)}
                checked={userAnswers[currentQuestion] === option}
              />
              <label>{option}</label>c
             
            </div>

          ))}
           <div className="text-center mt-3 d-flex gap-2 justify-content-center actions">
            <div className='d-flex gap-2'>
            <Button variant="contained" className='' onClick={handlePreviousQuestion}><i className="bi bi-chevron-double-left"></i>Previous</Button>
              <Button variant="contained" className=''onClick={handleNextQuestion}>Next <i className="bi bi-chevron-double-right"></i></Button>
            </div>
              <Button variant="contained" className='bg-success' onClick={handleSubmitTest}>Submit<i className="bi bi-check"></i></Button>
            </div>
        
        </div>

      ) : (
        <div>
          <p className='text-main-danger fs-3 text-center'>Your Score: {score} out of {quizData.length}</p>
          <div className="text-center mt-3">
            <label>
              Name:
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </label>
            <br />
            <button className='btn-gray mt-3' onClick={handleSubmitTest}>
              Submit Test
            </button>
          </div>
        </div>
      )}
        </div>
        
        </div>
        </div>
     </div>

  </div>
  );
}

export default Test;
