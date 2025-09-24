export default function NotFound() {
    const styles = {
        container: {
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '120px',
            margin: '0',
            color: '#2d3436',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        },
        text: {
            fontSize: '24px',
            color: '#636e72',
            marginBottom: '30px',
        },
        link: {
            padding: '15px 30px',
            background: '#0984e3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.text}>Упс! Сторінку не знайдено</p>
        </div>
    );
};
