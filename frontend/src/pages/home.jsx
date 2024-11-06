import React from 'react'
import ImageOne from '../components/hpcomponents/ImageOne'
import ImageTwo from '../components/hpcomponents/ImageTwo'
import ImageThree from '../components/hpcomponents/ImageThree'
import TextBox1 from '../components/hpcomponents/TextBox1'
import TextBox2 from '../components/hpcomponents/TextBox2'
import FooterForm from '../components/hpcomponents/FooterForm';
import RecentEntries from '../components/hpcomponents/RecentEntries'; 
function Home() {
  return (
    <div>
      <ImageOne />
      <TextBox1 />
      <ImageTwo />
      <TextBox2 />
      <ImageThree />
     
      <RecentEntries /> 
      <FooterForm />
    </div>
  );
}

export default Home;