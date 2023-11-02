const styles = {
  footer: {
    display: 'flex',
    listStyle: 'none',
    background: 'pink', 
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%'
  }
}

function Footer() {
  return (
    <footer className="footer" style={styles.footer}>
      <a><li>idk</li></a>
      <a><li>idk</li></a>
      <a><li>idk</li></a>
    </footer>
  );
}

export default Footer;