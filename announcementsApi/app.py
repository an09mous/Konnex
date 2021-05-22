import urllib
from flask import Flask, request
from flask_restful import Resource, Api
from flask_pymongo import PyMongo
from bson import json_util
from flask_cors import CORS
import urllib.parse

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/*": {"origins": "*"}})


mongo_uri = "mongodb+srv://an09mous:"
password = "konnex@123"
suffix = "@cluster0.is84r.mongodb.net/konnexDB?retryWrites=true&w=majority"
app.config["MONGO_URI"] = mongo_uri + urllib.parse.quote(password) + suffix
mongo = PyMongo(app)
api = Api(app)

class announcements(Resource):
    def get(self):
        key = request.args.get('key')
        config = mongo.db.announcements.find({"key": key})
        return json_util.dumps(config[0]["announcements"][-5:])

    def put(self):
        data = request.get_json(force=True)
        if(mongo.db.announcements.find({"key": request.args.get('key')})):
            mongo.db.announcements.update(
                {"key": request.args.get('key')},
                {
                    "$push": {
                        "announcements": data
                    }
                }
            )
        else: 
            mongo.db.announcements.insert_one({
                "key": request.args.get('key'),
                "announcements": [data]
            })
    


api.add_resource(announcements, '/api')

if __name__ == '__main__':
    app.run(debug=True, port=5002)