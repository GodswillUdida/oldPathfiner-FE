import { FC } from 'react'
import Home from './Home';
import ChooseUs from './ChooseUs';
import FeaturedCourses from '../components/FeaturedCourses';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import MeetOurInstructors from '../components/MeetOurInstructors';

const HomePage:FC = () => {
  return (
    <>
      <Home />
      <ChooseUs />
      <MeetOurInstructors/>
      <FeaturedCourses />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default HomePage;