const styles = {
  projectContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    background: 'purple',
    height: '50vh',

  },
  paragraph: {
    display: 'flex',
    background: 'blue',

  }
}

function Project() {
  return (
    <div className='projectContent' style={styles.projectContent}>

    <h1>About Me</h1>
    <div className="paragraph" style={styles.paragraph}>
    <p>
    jkashdfjsadkjhkjsdhafkjsahdfkjshgasdknfnbasdkjhgsadjkhgadsjhfhjsadgjdsahgfjkhdsgfjkdsagfjksadhfjksdagfjksdagfjkshgfjkhdsfhgasdfjkgsdakjfgsjfhgsdahfgskajdfgksjadgksjdahkjsagfkjdsajkfgdsakjh</p>
    </div>


    </div>
  )
}
 
export default Project;