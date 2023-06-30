import { useParams, Link } from "react-router-dom";
import { List, Card } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_CARS } from '../queries'

const getStyles = () => ({
    card: {
        width: '455px',
        backgroundColor: '#12C8F1',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
    }
})

const ShowPage = () => {
    const { id } = useParams();

    const styles = getStyles();

    const { loading, error, data } = useQuery(GET_CARS, {
        variables: { personId: id }
    });

    if (loading) return 'Loading...';
    if (error) return `Error from Cars component! ${error.message}`; 

    return (
        <>
            <div style={styles.list}><li><Link to='/' ><h1><ul></ul><u>Back to Home</u></h1></Link></li></div>
            <List grid={{gutter: 20, column: 1}} style={styles.list}>
            {data.personCars.map(({id, make, model, personId, price, year}) => (
                <List.Item key={id}>
                    <Card title={make} style={styles.card}>
                        <p>Model: {model}</p>
                        <p>Year: {year}</p>
                        <p>Price: ${price}</p>
                    </Card>
                </List.Item>
            ))}
            </List> 
        </>
    )
}

export default ShowPage;