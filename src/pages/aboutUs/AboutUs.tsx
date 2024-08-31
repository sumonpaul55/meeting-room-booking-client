import React from 'react';
import OurMission from './OurMission';
import OurStory from './OurStory';
import MeetTheTeam from './OurTeam';

const AboutUsPage: React.FC = () => {
    return (
        <div className="space-y-16">
            <OurMission />
            <MeetTheTeam />
            <OurStory />
        </div>
    );
};

export default AboutUsPage;
