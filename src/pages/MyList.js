import React from 'react';
import MyListUser from '../components/MyListUser';
import MyListUnpreffered from '../components/MyListUnpreffered';
import MyListFav from '../components/MyListFav';

const MyList = () => {
  return (
    <>
     <section className="app-section" style={{marginTop: "12rem"}}>
        <div className="app-container">
            <MyListUser />
            <MyListFav />
            <MyListUnpreffered />
        </div>
    
    </section>  
     
    </>
  );
};

export default MyList;