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

class isActive(Resource):
    def get(self):
        key = request.args.get('key')
        config = mongo.db.isActive.find({"key": key})
        return json_util.dumps(config[0])

    def put(self):
        data = request.get_json(force=True)
        if(mongo.db.isActive.find({"key": data.get('key')})):
            mongo.db.isActive.update_one(
                {"key": data.get('key')},
                {
                    "$set": {
                        "applicationNavigation": data.get('applicationNavigation'),
                        "chatbot": data.get('chatbot'),
                        "announcements": data.get('announcements'),
                        "bugs": data.get('bugs'),
                        "suggestions": data.get("suggestions"),
                        "usage": data.get("usage")
                    }
                }
            )
        else: 
            mongo.db.isActive.insert_one({
                "key": data.get('key'),
                "applicationNavigation": data.get('applicationNavigation'),
                "chatbot": data.get('chatbot'),
                "announcements": data.get('announcements'),
                "bugs": data.get('bugs'),
                "suggestions": data.get("suggestions"),
                "usage": data.get("usage")
            })
    


api.add_resource(isActive, '/api')

if __name__ == '__main__':
    app.run(debug=True, port=5001)