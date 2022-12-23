import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import style from './Sidebar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '../SuggestedAccounts';
import * as userService from '~/services/userService';
import config from '~/config';

const cx = classNames.bind(style);
const PER_PAGE = 5;
function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUser}
            />
            <SuggestedAccounts label="Following" />
        </aside>
    );
}
export default Sidebar;
