import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUsersAC} from "../../redux/mainReducer";
import {useEffect} from 'react'
import {Spin} from 'antd';

function OnlineUsersList() {

    const dispatch = useDispatch()
    const usersData = useSelector(state => state.main.users)
    const isLoading = useSelector(state => state.main.isLoadingUsers)

    let users = null


    if (usersData !== null) {
        users = usersData.map(item => <div key={item.id}>{item.name}</div>)
    }

    useEffect(() => {
        dispatch(getUsersAC())
        console.log('Эффект отработал')
    }, []);

    console.log(isLoading)

    return (

        <div>
            {isLoading === true ? <div>ЗАГРУЗКА</div> : users}
        </div>
    )

}

export default OnlineUsersList
