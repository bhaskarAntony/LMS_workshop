import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Database/firebase';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import notFoundImage from '../images/not-found.svg';

function UserScore() {
    const [userScore, setUserScore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uid, setUid] = useState();
  
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
            console.log("uid", user.uid);
            setUid(user.uid);
          } else {
            console.log("user is logged out");
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      const fetchUserScores = async () => {
        if (uid) {
          try {
            const response = await axios.get(`https://dull-trousers-deer.cyclic.app/api/scoresList`);
            const userScoreData = response.data.find(user => user.userId === uid);
            setUserScore(userScoreData);
          } catch (error) {
            console.error('Error fetching user scores:', error.message);
          } finally {
            setLoading(false);
          }
        }
      };
  
      fetchUserScores();
    }, [uid]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  

  return (
    <div className='p-3 p-md-4'>
      <span className="fs-3 d-block">User Test Scores</span>
      <small className="text-secondary">Attend Our test and improve your skill</small>
      <hr />

      {userScore ? (
        // <div className="text-center">
        //   <div className="row justify-content-center align-items-center">
        //     {/* Add the total score section */}
        //     <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
        //       <div className="score w-100">
        //         <CircularProgressbar value={100} text={`${21}`} styles={buildStyles({
        //           backgroundColor: '#3e98c7'
        //         })} className='w-100' />
        //         <span className="fs-5 mt-2 d-block">Total</span>
        //         <small className="text-secondary">21 Questions</small>
        //       </div>
        //     </div>
        //     {/* Add the user score section */}
        //     <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
        //       <div className="score w-100">
        //         <CircularProgressbar value={Math.floor((userScore.score / 21) * 100)} text={`${userScore.score}/21`} className='w-100' styles={buildStyles({
        //           pathColor: `#00b02c`,
        //           trailColor: '#d6d6d6',
        //           backgroundColor: '#3e98c7'
        //         })} />
        //         <span className="fs-5 mt-2 d-block">Your score</span>
        //         <small className="text-secondary">attended {userScore.score}/21</small>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="text-center">
        <img src={notFoundImage} alt="image" width={180} />
        <span className='fs-4 d-block mb-3 fw-bold'>No user data available</span>
        <small className="text-secondary">We can't Display Your Progress <b>Unlock your test and attend  test to see your progress</b></small>
      </div>
      ) : (
        <div className="text-center">
          <img src={notFoundImage} alt="image" width={180} />
          <span className='fs-4 d-block mb-3 fw-bold'>No user data available</span>
          <small className="text-secondary">We can't Display Your Progress <b>Attend the test to see your progress</b></small>
        </div>
      )}
    </div>
  );
}

export default UserScore;
