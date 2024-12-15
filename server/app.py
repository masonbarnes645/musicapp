from flask import Flask, jsonify, make_response, request, session, redirect, url_for
from flask_restful import Resource, Api
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta, timezone
import base64

load_dotenv()



app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True, origins=["http://127.0.0.1:5173"])
app.secret_key = os.getenv('SESSION_SECRET')


BASE_URL = 'https://api.spotify.com/v1/'
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
        else:
            raise Exception(f"Failed to get access token: {response.status_code}, {response.json()}")
    
@app.route('/test')
def test_token():
    try:
        get_token()
        token = session.get('token')
        if token:
            return jsonify({"message": "Token successfully retrieved", "token": session['access_token']}), 200
        else:
            return jsonify({"message": "Failed to retrieve token"}), 500
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/artists/<id>')
def get_artist(id):
    try:    
        get_token()
        token = session['token']
        if token:
            headers = {"Authorization": f"Bearer {token}"}
            response = (requests.get(f'{BASE_URL}artists/{id}', headers=headers))
            if response.status_code == 200:
                artist_data = response.json()
                return (artist_data)                        
            else:
                return jsonify({"error": "Failed to fetch artist data", "status": response.text}), response.status_code
        else:
            return jsonify({"error": "Token missing or expired"}), 401
    
    except Exception as e:

        return jsonify({'Error': str(e)}), 500
    

@app.route('/callback')
def callback():
    auth_code = request.args.get('code')
    client_credentials = f"{CLIENT_ID}:{CLIENT_SECRET}"
    encoded_cc = base64.b64encode(client_credentials.encode()).decode()
    data = {
            "grant_type" : "authorization_code",
            "code" : auth_code,
            "redirect_uri" : "http://127.0.0.1:5000/callback"
              }
    headers={
            "Authorization": f"Basic {encoded_cc}",
            "content-type" : "application/x-www-form-urlencoded"
        }
    response = requests.post(
                            TOKEN_URL,
                             data=data,
                             headers=headers
                             )
    if response.status_code == 200:
        token = response.json()
        session['access_token'] = token['access_token']
        session['refresh_token'] = token['refresh_token']
        return redirect('http://127.0.0.1:5173')
    return jsonify({"message": "Failed to retrieve token"}), 500

@app.route('/profile')
def get_profile():
    try:
        access_token = session['access_token']
        print(f' after: {access_token}')
        if not access_token:
            return {"error": "Access token is missing or invalid."}, 401
        headers = {"Authorization": f"Bearer {access_token}"}
        response = requests.get(f"{BASE_URL}me", headers=headers)
        if response.status_code == 200:
            profile_data = response.json()
            return profile_data
        else:
            return {
                "error": f"Failed to fetch profile: {response.status_code}",
                "details": response.json()
            }, response.status_code
    except KeyError as e:
        return {"error": f"Missing key in session: {str(e)}"}, 400
    except requests.RequestException as e:
        return {"error": f"HTTP request failed: {str(e)}"}, 500
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}, 500



    


if __name__ == '__main__':
    app.run(debug=False)