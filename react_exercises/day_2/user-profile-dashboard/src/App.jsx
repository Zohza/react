import "./App.css";
import SkillBadge from "./SkillBadge";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div className="content">
   <ProfileCard>
       <ProfileHeader 
        name="John Jonah" 
        title="AI developer | Data Enthusiast" 
        avatar='https://images.pexels.com/photos/7776184/pexels-photo-7776184.jpeg'/>
      <ProfileCard 
      />
      <ProfileStats projects='2'
    followers='500'
    following='7000'/>
      <SkillBadge 
      skills='React'
      level='Beginner' />
    
   </ProfileCard>
      
    </div>
  );
};

export default App;
