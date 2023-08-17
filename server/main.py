from flask import Flask, render_template
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
    data = DATABASE.find({'sector' : 'Energy'})
    return render_template('chart.html', data=data)





if __name__ == "__main__":
    app.run(debug=True, port=5000)