import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Database/firebase';
import './style.css'
import { Button, FormControlLabel, Radio} from '@mui/material';
import Appbar from '../Appbar/Appbar';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Shimmer } from 'react-shimmer';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Email from '../../templates/doubts';

const URL = "https://email-api-r1kd.onrender.com"



function Test() {
const {id} = useParams()
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState("")
  const [userDoubt, setDoubt] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
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
            setUserEmail(user.email);
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
        axios.get(`https://stormy-flannel-nightgown-ox.cyclic.app/api/assessments/${id}`)
          .then(response => {
            setLoading(false);
            const shuffledQuestions = shuffleArray(response.data.assessments);
            console.log(response.data.assessments);
            setQuizData(shuffledQuestions); // Make sure to set the shuffled questions
          })
          .catch(error => {
            setLoading(true);
            toast.error(error.message);
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

    axios.post('https://stormy-flannel-nightgown-ox.cyclic.app/api/addScores', userData)
      .then(response => {
        console.log('Test results submitted successfully:', response.data);
        // You can add any additional logic or UI updates here
        toast.success("thank you for completing test")
        navigate('/')
      })
      .catch(error => {
        console.error('Error submitting test results:', error.message);
        toast.error(error.message)
        // Handle errors or show error messages to the user
      });
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const firstEmail = async (a_email, uEmail, question, doubt) =>{
    setLoading(true)
    try {
      let data = Email(uEmail, question, doubt);
      let to = a_email;
      let sub = "Wokshop Test Doubts";

      let final = {
        to,
        subject: sub,
        content: data,
      };

      setLoading(true);

      await axios
        .post(`${URL}/api/send/mail`, final)
        .then((res) => {
          setLoading(false)
          setOpen(false);
          setDoubt("")
          toast.success("your doubt has been recieved, we will get back to you.")
        
        })
        .catch((err) => toast.error(err.message));
    } catch (err) {
      console.log(err.message);
      setOpen(false);
      setLoading(false)
      toast.error(err.message)
    }
  }

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
            
            {
                loading?(
                    Array(1)
                    .fill(null)
                    .map((_, index) => (
                    <div className='p-3'>
                    <Shimmer width="80%" height={35} className='mb-3 rounded-3'/>
                    <Shimmer width="60%" height={35} className='mb-3 rounded-3'/>
                    <Shimmer width="30%" height={30} className='mb-4 rounded-3'/>
                    <Shimmer width="30%" height={30} className='mb-4 rounded-3'/>
                    <Shimmer width="30%" height={30} className='mb-4 rounded-3'/>
                    <Shimmer width="30%" height={30} className='mb-4 rounded-3'/>
                   
                    </div>
                    ))
                ):(
                    <div className="main-mcq">
                    <div className='p-3 p-md-5 mt-0'>
                    {!isQuizCompleted ? (
                    <div>
                      <p className='fs-4 text-main-danger'> {currentQuestion + 1}) {quizData[currentQuestion]?.question}</p>
                      {quizData[currentQuestion]?.options.map((option, index) => (
                        <div key={index} className="q-option d-flex gap-2 align-items-center">
                         
                            <FormControlLabel 
                            name="quizOption"
                            className='text-900 fs-4 mx-2'
                            value={option}
                            onChange={() => handleAnswerSelection(option)}
                            checked={userAnswers[currentQuestion] === option}
                             control={<Radio />}
                              label={option}
                               />
                         
                        </div>
            
                      ))}
                       <div className="text-center mt-3 d-flex gap-2 justify-content-center actions">
                        <div className='d-flex gap-2'>
                        <Button variant="contained" className='p-3' onClick={handlePreviousQuestion}><i className="bi bi-chevron-double-left"></i>Previous</Button>
                          <Button variant="contained" className='p-3'onClick={handleNextQuestion}>Next <i className="bi bi-chevron-double-right"></i></Button>
                          <Button variant="contained" onClick={handleClickOpen} className='bg-warning'><i class="bi bi-chat-dots mx-2 fs-4"></i>send Doubt</Button>
                            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>have you any doubt?</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {quizData[currentQuestion]?.question}
          </DialogContentText>
           <TextField
            autoFocus
            margin="dense"
            id="doubt"
            label="Type Your Doubt"
            type="text"
            fullWidth
            variant="standard"
            value={userDoubt} onChange={(e) => setDoubt(e.target.value)}
          />
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>firstEmail("bhaskarbabucm6@gmail.com", userEmail, `${quizData[currentQuestion]?.question}`, userDoubt)}>send</Button>
        </DialogActions>
      </Dialog>
                        </div>
                         
                        </div>
                    
                    </div>
            
                  ) : (
                    <div>
                       <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <h1 className='fs-2 text-center'>Hello Developer 👋...</h1>
                      <p className='text-main-danger fs-3 text-center'>Your Score: {score} out of {quizData.length}</p>
                      <div className="mt-3">
                        <TextField id="outlined-basic" label="Developer Name" variant="outlined" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}  className="mt-3 w-100"/> <br />
                    
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="tel" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="mt-3 w-100"/>
                        <br />
                        <Button variant="contained" className='w-100 mt-3 p-3' onClick={handleSubmitTest}>Submit<i className="bi bi-check"></i></Button>
                      </div>
                        </div>
                       </div>
                    </div>
                  )}
                    </div>
                    
                    </div>
                )
            }
      
        </div>
     </div>
    

  </div>
  );
}

export default Test;
