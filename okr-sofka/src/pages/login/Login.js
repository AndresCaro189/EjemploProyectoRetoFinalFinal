import React from 'react';
import Welcome from '../../components/notifications/Welcome'
import OkrFinish from '../../components/notifications/OkrFinish'
import KrFinish from '../../components/notifications/KrFinish'

const Login = () => {
    return (
        <div>
            <div>
                <Welcome />
            </div>
            <div>
                <OkrFinish />
            </div>
            <div>
                <KrFinish />
            </div>
        </div>
    )

}

export default Login