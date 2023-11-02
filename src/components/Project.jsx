const styles = {
  projectContent: {
    display: 'flex',
    background: 'purple',
    height: '50vh'
  }
}

function Project() {
  return (
    <div className='projectContent' style={styles.projectContent}>
    <h1>About Me</h1>
    </div>
  )
}

export default Project;