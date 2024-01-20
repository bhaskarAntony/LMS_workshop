import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import notFoundImage from '../images/not-found.svg';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="event-tab bg-white p-2">
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Cirriculum" {...a11yProps(1)} />
          <Tab label="Materials" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <ul>
        <li> Acquire valuable, hands-on insights to launch your MERN fullstack development career effectively</li>
        <li> Get your burning questions answered by industry experts in real time</li>
        <li> Learn from experts about the current job market's robust demand for careers in MERN Fullstack Development</li>
        <li> Attend our Bootcamp conveniently from your own home</li>
        <li> Build, test, and deploy a web application using the MERN stack</li>
        <li> Build, test using POSTMAN, and deploy APIs in Real Time Server</li>
        <li> Build, test, and deploy a front-end web application using React</li>
        <li> Setup Continuous Integration (CI) and Continuous Delivery (CD) pipelines to deploy a React application using GitHub.</li>
        <li> Present a GitHub portfolio of your work to potential employers</li>
        <li> We offer E-certificates upon completion of the Bootcamp and provide study materials</li>
       </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ol>
          <li className='mb-3'>
            Day1: <br />
            <h1 className="fs-5 text-primary">Web Development</h1>
            <p className="fs-6">
            You will develop foundational skills in web development using JavaScript, HTML, and CSS. You’ll also create your own personal portfolio in GitHub, which you will add to as you progress through the program.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>personal portfolio in GitHub</li>
              <li>javascript</li>
            </ul>
          </li>

          <li className='mb-3'>
            Day2: <br />
            <h1 className="fs-5 text-primary">Back-End Development</h1>
            <p className="fs-6">
            You will work with MongoDB, ExpressJS, and NodeJS to become confident in the MERN stack. You will learn the essentials for working in the cloud, automation, and deployment for a solid foundation in FullStack.
            </p>
            <ul>
              <li>MongoDB</li>
              <li>ExpressJs</li>
              <li>NodeJS</li>
              <li>automation</li>
            </ul>
          </li>

          <li className='mb-3'>
            Day3: <br />
            <h1 className="fs-5 text-primary">Front-End Development</h1>
            <p className="fs-6">
            You will dive deep into front-end development using one of the most popular frameworks, React. You will write clean, concise code with JavaScript ES6 and use these skills to work with web components in React. You will learn how to build React applications and how to implement and deploy them on real time hosting.
            </p>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript ES6</li>
              <li>real time hosting</li>
            </ul>
          </li>
        </ol>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="text-center">
          <img src={notFoundImage} alt="image" width={180} />
          <span className='fs-4 d-block mb-3 fw-bold'>Student details is not Available</span>
          <small className="text-secondary">We can't Display Student Details <b>Complete the video and attend the test to see Student Details</b></small>
        </div>
      </CustomTabPanel>
    </Box>
   </div>
  );
}