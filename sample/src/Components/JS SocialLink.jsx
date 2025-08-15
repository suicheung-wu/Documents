import { SocialLink } from "../data";

function SocialLink() {
    return (
        <ul className='icon-list'>
            <li className='icon-item'>
                <a href='http://facebook.com'>
                    <i className='fa-branda fa-facebook'> </i>
                </a>
            </li>
            <li className='icon-item'>
                <a href='#'>
                    <i className='fa-brands fa-twitter'></i>
                </a>
            </li>
        </ul>
    );
}