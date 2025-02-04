#!/usr/bin/python3
""" Python Flask App to start server """
from flask import Flask
from flask_cors import CORS
from routes import hng_stage_0_route
from routes import hng_stage_1_route

app = Flask(__name__)
CORS(app)
app.register_blueprint(hng_stage_0_route, url_prefix='/details')
app.register_blueprint(hng_stage_1_route)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
