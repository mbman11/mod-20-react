const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    listStyle: 'none',
    background: 'pink', 
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    gap: '50px'
  }
}

function Footer() {
  return (
    <footer className="footer" style={styles.footer}>
      <a><li>Github</li></a>
      <a><li>Linkedin</li></a>
    </footer>
  );
}

export default Footer;