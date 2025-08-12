import { SocialLink } from "../data";
function SocialLink() {
    return (
        <ul className='icon-list'>
            {SocialLink.map((link) => (
                <li className='icon-item' key={link.id}>
                    <a href={link.href}>
                        <i className="{link.icon}"
                    </a>
                </li>
            )

            })
            <li className={itemName}>
                <
            </li>
        </ul></ul>
    )
}