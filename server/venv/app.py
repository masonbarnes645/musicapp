from flask import Flask, jsonify, make_response
from flask_restful import Resource, Api
import requests
from flask_cors import CORS



class Chart(Resource):
    def get(self):
        try:
            response = requests.get("https://api.deezer.com/chart")
            if (response.ok):
                data = response.json()
                return make_response(data, 200)
            else:
                return jsonify({"error": "Failed to fetch chart data"}), 500
        except Exception as e:
            return jsonify({"error": str(e)}), 500            




app = Flask(__name__)
api = Api(app)
CORS(app)



api.add_resource(Chart, '/api/chart')







if __name__ == '__main__':
    app.run(debug=True)