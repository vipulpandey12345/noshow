import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
#comment
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
    if conn is None:
        return jsonify({'error': 'Could not connect to the database'}), 500
    print('hit')
    cur = conn.cursor()
    cur.execute('SELECT username FROM users;')
    rows = cur.fetchall()
    cur.close()
    conn.close()
    usernames = [row[0] for row in rows]
    print(usernames)
    return jsonify({'data': usernames}) 
if __name__ == '__main__':
    app.run(debug=True)
