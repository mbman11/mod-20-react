const styles = {
  navStyle: {
    display: 'flex',
    width: '100vw',
    listStyle: 'none',
    background: 'red',
    gap: '50px',
    height: '80px',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    background: 'blue',
  },
  navItems: {
    display: 'flex',

    gap: '50px',
    background: 'yellow'
  }
}


function Nav() {
  return (
    <div className="nav-bar" style={styles.navStyle}>
      <div className='logo' style={styles.logo}>
        <li>LOGO</li>
      </div>
      <div className='navItems' style={styles.navItems}>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </div>
    </div>
  );
}

export default Nav;