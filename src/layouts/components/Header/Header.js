import {
    faCloudUpload,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import {
    FeedBackIcon,
    GetCoinsIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessagesIcon,
    SettingIcon,
    ViewProfileIcon,
} from '~/components/Icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import style from './Header.module.scss';
import Search from '../Search';
import config from '~/config';
const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FeedBackIcon />,
        title: 'Feedback end help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMennu = [
        {
            icon: <ViewProfileIcon />,
            title: 'View profile',
            to: '/@dutiendung',
        },
        {
            icon: <GetCoinsIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                hideOnClick={false}
                                delay={[0, 50]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy
                                hideOnClick={false}
                                delay={[0, 50]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                hideOnClick={false}
                                delay={[0, 50]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99+</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                href="https://fullstack.edu.vn/"
                                target="_blank"
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={userMennu ? userMennu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665757201241090.jpeg?x-expires=1666695600&x-signature=lCguCYt%2FwueUwOvrRWIXEE0Ic9g%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
