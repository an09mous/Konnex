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
collection = mongo.db.isActive
class isActive(Resource):
    def get(self):
        key = request.args.get('key')
        return json_util.dumps(collection.find_one({"key": key}))

    def put(self):
        data = request.get_json(force=True)
        if(collection.find_one({"key": data.get('key')}) == None):
            collection.insert_one(data)
            return True
        return False

    def patch(self):
        data = request.get_json(force=True)
        if(data == {}):
            return False
        query = collection.update_one(
            {"key": request.args.get('key')},
            {
                "$set": data
            }
        )

        return query.matched_count > 0

api.add_resource(isActive, '/api')

if __name__ == '__main__':
    app.run(debug=True, port=5001)