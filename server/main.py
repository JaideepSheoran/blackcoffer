from fastapi.encoders import jsonable_encoder
from flask import Flask, jsonify, make_response, render_template
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__, template_folder='templates')
CORS(app)

# SETUP MONGO_DB
app.config['MONGO_URI'] =  "mongodb+srv://jaideepsinghsheoran:jaideep123@cluster0.sme0l7z.mongodb.net/storemanager"
app.config['SECRET_KEY'] = "jaideepsinghsheoranisbacktobuisness"
DATABASE = PyMongo(app).db.blackcoffer

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/chart_data")
def get_chart_data():
    # data = DATABASE.find({'sector' : 'Energy'})
    
    newdata = DATABASE.aggregate([{
        "$group" : {
            "_id" : {"sector" : "$sector"},
            "total_intensity" : {"$sum" : "$intensity"},
            "total_likelihood" : {"$sum" : "$likelihood"},
            "total_relevance" : {"$sum" : "$relevance"}
        }
    }])

    chart_data = []

    for doc in newdata:
        newDoc = jsonable_encoder(doc, exclude_none=True)
        chart_data.append(newDoc)


    return make_response(chart_data, 200)





if __name__ == "__main__":
    app.run(debug=True, port=5000)