import React from 'react';

const Header = (props) => (
    <div className="row header">
        <div className="container header__container">
            <div className="row">
                <div className="col-sm-8 col-12">
                    <a href="https://www.yourproformance.com/" target="_blank"><img src="/images/logo.png"/></a>
                </div>
                <div className="header__social col-sm-4">
                    <b>Admin Portal</b>
                </div>
            </div>
        </div>
</div>
);

Header.defaultProps = {
    title: 'ProFormance'
}

export default Header;