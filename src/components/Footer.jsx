import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer" role="contentinfo">
            <div className="footer-left">
                <strong>AP Job Scheduler & Monitor</strong>
            </div>

            <div className="footer-right">
                <div>v2.0</div>
                <div className="footer-links">
                    <a
                        href="mailto:adinathmahandule.07@gmail.com"
                        aria-label="Contact maintainer via email"
                        title="Contact"
                    >
                        Contact
                    </a>
                </div>
                <div className="copyright">© {year} </div>
            </div>
        </footer>
    );
}
