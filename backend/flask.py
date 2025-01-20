import psycopg2
from flask import Flask

app = Flask(__name__)

# Database configuration
app.config['DB_HOST'] = 'localhost'
app.config['DB_PORT'] = '5431'
app.config['DB_NAME'] = 'postgres'
app.config['DB_USER'] = 'vipulpandey'
app.config['DB_PASSWORD'] = '1234'

def get_db_connection():
    conn = psycopg2.connect(
        host=app.config['DB_HOST'],
        port=app.config['DB_PORT'],
        dbname=app.config['DB_NAME'],
        user=app.config['DB_USER'],
        password=app.config['DB_PASSWORD']
    )
    return conn

@app.route('/get_all_names')
def get_all_names():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT username FROM users;')
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return {'data': rows}

if __name__ == '__main__':
    app.run(debug=True)
