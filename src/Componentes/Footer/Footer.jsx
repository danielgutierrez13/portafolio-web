import React from 'react';

function Footer() {
  return (
    <footer className="edrea_footer">
        <div className="container">
            <div className="content">
                <div className="footer_left">
                    <p>Copyright © 2021 <a href="https://themeforest.net/user/ib-themes" target="_blank">ib-themes</a> - Daniel Gutierrez</p>
                </div>

                <div className="footer_right">
                    <ul>
                        <li><a href="https://www.facebook.com/danieI.gutierrez.villegas/" target="_blank"><img className="svg" src="assets/img/svg/social/facebook.svg" alt="social" /></a></li>
                        <li><a href="https://www.linkedin.com/in/cesar-daniel-gutierrez-villegas-16032b225/" target="_blank"><img className="svg" src="assets/img/svg/social/linkedin.svg" alt="social" /></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  );
}

export default Footer;