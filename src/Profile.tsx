import React from 'react'

interface UserInfoProps{
    username:string;
    name:string;
}

const Profile :React.FunctionComponent<UserInfoProps> = (props) => {
    return (
        <>
            <div>
                <b>
                    {props.username}
                </b>
                <span>
                    ({props.name})
                </span>
            </div>
        </>
    );
};

export default Profile;