import logo from './logo.svg';
import './App.css';
import CustomAppBar from './components/header';
import Hero from './sections/Hero/hero';
import LandingPage from './pages/landingPage';
import HomePage from './pages/homePage';
import CreateMissionPage from './pages/createMissionPage';
import SurveyForms from './pages/surveyForms';
import CreateForm from './pages/surveyForms/createForm';
import AccountSettings from './pages/accountSettings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateMissionButton from './pages/createMissionPage/button';
import EditPersonalProfile from './pages/accountSettings/editPersonalProfile';
import EditBusinessProfile from './pages/accountSettings/editBusinessProfile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/edit-profile",
      element: <EditPersonalProfile />,
    },
    {
      path: "/edit-business-profile",
      element: <EditBusinessProfile />,
    },
    {
      path: "/create-mission",
      element: <CreateMissionPage />,
    },
    {
      path: "/add-mission",
      element: <CreateMissionPage />,
    },
    {
      path: "/survey-forms",
      element: <SurveyForms />,
    },
    {
      path: "/account-settings",
      element: <AccountSettings />,
    },
    {
      // path: "/history",
      // element: <TestHestory />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
