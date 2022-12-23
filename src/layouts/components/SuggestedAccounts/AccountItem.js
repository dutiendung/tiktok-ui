import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Img from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(style);
function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={data} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy
            interactive
            placement="bottom"
            delay={[600, 0]}
            offset={[-20, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <Img
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                <div className={cx('item-info')}>
                    <p className={cx('nikname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        )}
                    </p>
                    <p
                        className={cx('name')}
                    >{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
