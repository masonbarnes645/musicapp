from flask import Flask, jsonify, make_response, request, session
from flask_restful import Resource, Api
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta, timezone
import traceback
load_dotenv()



app = Flask(__name__)
api = Api(app)
CORS(app)
app.secret_key = os.getenv('SESSION_SECRET')

base = 'https://api.spotify.com/v1/'
CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
TOKEN_URL = 'https://accounts.spotify.com/api/token'



def get_token():
    token = session.get('token')
    exp_time = session.get('expiration_time')
    if token and exp_time > datetime.now(timezone.utc):
        return
    else:
        response = requests.post(
            TOKEN_URL,
            data={"grant_type": "client_credentials"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
            auth=(CLIENT_ID, CLIENT_SECRET) 
        )
        if response.status_code == 200:
            token_info = response.json()
            session['token'] = token_info["access_token"]
            session['expiration_time'] = (datetime.now(timezone.utc) + timedelta(hours=1))
            print(session['expiration_time'])
        else:
            raise Exception(f"Failed to get access token: {response.status_code}, {response.json()}")
    
@app.route('/test')
def test_token():
    try:
        get_token() 
        token = session.get('token')
        print(session['token'])
        print(session['expiration_time'])
        print(datetime.now(timezone.utc))  
        if token:
            return jsonify({"message": "Token successfully retrieved", "token": token}), 200
        else:
            return jsonify({"message": "Failed to retrieve token"}), 501
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/artists/<id>')
def get_artist(id):
    try:    
        get_token()
        token = session['token']
        if token:
            headers = {"Authorization": f"Bearer {token}"}
            response = (requests.get(f'{base}artists/{id}', headers=headers))
            if response.status_code == 200:
                artist_data = response.json()
                print((artist_data))
                return (artist_data)                        
            else:
                return jsonify({"error": "Failed to fetch artist data", "status": response.text}), response.status_code
        else:
            return jsonify({"error": "Token missing or expired"}), 401
    
    except Exception as e:
        # Log the full traceback for debugging
        traceback.print_exc()
        return jsonify({'Error': str(e), 'Traceback': traceback.format_exc()}), 500
    
@app.route('/fart')
def test():
    print('test')
    return









if __name__ == '__main__':
    app.run(debug=True)