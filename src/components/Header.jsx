const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'green',
    margin: '0px',
    height: '250px'
  }
}

function Header() {
  return (
    <div className='headerContainer'>
      <h1 style={styles.headerContainer}>Hello</h1>
    </div>
  );
}

export default Header;