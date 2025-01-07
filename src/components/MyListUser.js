import React from "react";
import './MyListUser.scss';

const MyListUser = () =>{

    return (
        <>

            <div className="profile-container">
                <div className="profile-grid">
                    <div className="profile">
                        <div className="profile-user">
                            <img src="#" alt="profile name"></img>
                            <div className='profile-user__data'>
                                <h2>Name and Surname</h2>
                                <p>nameandsurname@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-user-data">
                        <div className='profile-data'>845 Reviews</div>
                        <div className='profile-data'>265 you want to watch</div>
                        <div className='profile-data'>666 your favourites</div>
                        <div className='profile-data'>999 your unpreferred</div>


                    </div>
                </div>
            </div>



        </>

    );
}

export default MyListUser;