import React from 'react';
import MyListUser from '../components/MyListUser';

const MyList = () => {
  return (
    <>
     <section className="app-section" style={{marginTop: "12rem"}}>
        <div className="app-container">
            <MyListUser />
        </div>
    
    </section>  
     
    </>
  );
};

export default MyList;