import React from 'react';

const Header = () => {
    return (
        <>
        <div className="homepage_header_sec" style={{ background: 'linear-gradient(to top, #FFC232, #FFFFFF)' }}>
            <div className="top_of_header d-flex justify-content-center align-items-center text-center p-1">
                <img src='https://2.bp.blogspot.com/-5acI9wNwFEk/VnbXpJ0wbnI/AAAAAAAAAMY/8wdIeybXjnY/s1600/Sri%2BApeethakuchambal%2BSametha%2BSri%2BArunachaleswara%2BSwamy%2521.jpg' width={120} alt='sivam' className='web-logo rounded' />
                <div className='p-3'><img src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1710735472/blog/54373628d8f3ea20a9cfcd669686aa4e_gsjwpa.png" width={450} alt="ttd"/>
            <h1 className='h5'>Tiruvannamalai Arunachalesvara Devasthanam</h1></div></div>
            <div className="nav_menu_for_homepage text-bold">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div className="container-fluid d-flex justify-content-center">
                        <button type="button" className="navbar-toggler ml-auto" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav justify-content-center align-items-center">
                                <NavItem link="#" text="Home" active={true} />
                                <Divider />
                                <DropdownMenu title="Online Services" items={['Inbox', 'Sent', 'Drafts']} />
                                <Divider />
                                <DropdownMenu title="News and Events" items={['Inbox', 'Sent', 'Drafts']} />
                                <Divider />
                                <DropdownMenu title="Contacts" items={['Inbox', 'Sent', 'Drafts']} />
                                <Divider />
                                <DropdownMenu title="Gallery" items={['Past - Present', 'Unique Photos', 'News Album','Karithigai Deepam']} />
                                <Divider />
                                <NavItem link="#" text="About" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
        <marquee className="bg-white">The Travancore Devaswom Board has not entrusted any agencies or individuals for fund collection.</marquee>
        </>
    );
};

const NavItem = ({ link, text, active }) => (
    <a href={link} className={`nav-item nav-link${active ? ' active' : ''}`}>
        {text}
    </a>
);

const Divider = () => (
    <div className="vertical-divider mx-2" style={{ borderLeft: '1px solid lightgray', height: '35px' }}></div>
);

const DropdownMenu = ({ title, items }) => (
    <div className="nav-item dropdown">
        <a href="#" className="nav-link" data-bs-toggle="dropdown">{title}</a>
        <div className="dropdown-menu bg-dark">
            {items.map((item, index) => (
                <a key={index} href="#" className="dropdown-item text-white">{item}</a>
            ))}
        </div>
    </div>
);

export default Header;
