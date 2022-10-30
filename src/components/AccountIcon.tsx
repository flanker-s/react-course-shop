import {useSelector} from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../features/auth/authSlice';

interface AccountProps {
    buttonClassName: string
}

function AccountIcon({ buttonClassName }: AccountProps) {

    const username = useSelector(selectCurrentUser)
    const navigate = useNavigate();

    function clickHandler() {
        navigate('/user')
    }

    return (
        <div className='flex items-center'>
            <div>
                {username}
            </div>
            <button className={" " + buttonClassName} onClick={clickHandler}>
                <AccountCircleIcon fontSize="large" />
            </button>
        </div>
    )
}

export default AccountIcon