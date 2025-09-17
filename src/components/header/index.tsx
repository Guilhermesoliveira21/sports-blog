import { Link } from 'react-router-dom';
import { headerData } from '../../mocks/header';
import styles from './header.module.css';
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { useState } from 'react';

export const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    console.log(isOpenMenu)

    return (
        <>
            <header className={styles.header_container}>
                <div className={styles.container}>
                    <div>
                        <span className={styles.logo}>Sports</span>
                    </div>
                    <nav className={styles.navigation}>
                        {headerData?.map((item) => (
                            <ul>
                                <li>
                                    <Link className={styles.link} to={item.link}>{item.label}</Link>
                                </li>
                            </ul>
                        ))}

                    </nav>
                    <div className={styles.redes_sociais}>
                        <Link to={''}>
                            <FaGithub />
                        </Link>
                        <Link to={''}>
                            <FaLinkedin />
                        </Link>
                    </div>
                    <div
                        onClick={() => setIsOpenMenu((prevMenu) => !prevMenu)}
                        className={styles.menu_bar}>
                        {!isOpenMenu ? <FaBars /> : <RiCloseLine />}
                    </div>
                </div>


            </header>
                {isOpenMenu && (
            <div className={`${styles.container_mobile} ${isOpenMenu ? styles.open : ''}`}>
                    <nav className={styles.link_container_mobile}>
                    <ul>
                        {headerData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.label} className={styles.link_mobile}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
                )}
        </>
    )
}