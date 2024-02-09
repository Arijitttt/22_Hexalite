#?flask setup
from flask import Flask, request, render_template,jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"
@app.route('/testing')
def testing():
    return render_template("test.html")
@app.route("/members")
def member():
    #return {"members": ["member1","member2","member3"]}
    data = {
        "message":"null"
    }
    return jsonify(data)
@app.route('/api/data')
def get_data():
    data = {'key': 'value'}
    return jsonify(data)
if __name__ == "__main__":
    app.run(debug=True)
