import React from 'react';
import Welcome from '../../components/notifications/welcome/Welcome'
import OkrFinish from '../../components/notifications/okrfinish/OkrFinish'
import KrFinish from '../../components/notifications/krfinish/KrFinish'

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