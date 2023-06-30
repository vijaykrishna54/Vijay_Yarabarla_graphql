const getStyles = () => ({
    title: {
        fontSize: 50,
        padding: '15px',
        color: 'black' ,
    }
})

const Title = () => {
    const styles = getStyles();

    return <h1 style={styles.title}>Dashboard</h1>
}

export default Title;