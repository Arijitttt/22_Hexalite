#?flask setup
from flask import Flask,  render_template,jsonify




app = Flask(__name__)



@app.route('/')
def home():
    """
    Route for the home page, renders the Home_Page.html template.
    """
    return render_template("Home_Page.html")
@app.route('/coochbihar-map')
def mapcoochbihar():
    """
    Route for the home page, renders the Home_Page.html template.
    """
    return render_template("m-coochbihar.html")
@app.route('/west-bengal')
def west():

    return render_template("WB.html")
@app.route('/Kerala')
def kerala():

    return render_template("Kerala.html")
@app.route('/Jharkhand')
def jk():
   
    return render_template("JK.html")
@app.route('/about')
def about():
    """
    Route for the about page.
    """
    return render_template("AboutUs_Page.html")
@app.route('/contact')
def contact():
    """
    Route for the about page.
    """
    return render_template("ContactUs_Page.html")
@app.route('/map')
def map():
    """
    Route for displaying the map page.
    """
    return render_template("Map.html")
@app.route('/search')
def search():
    """
    Route for displaying the search page.
    """
    return render_template("Search.html")
@app.route("/members")
def member():
    #return {"members": ["member1","member2","member3"]}
    data = {
        "message":"null"
    }
    return jsonify(data)
@app.route('/api/data')
def get_data():
    """
    Retrieve data from the '/api/data' endpoint and return it as JSON.
    """
    data = {'key': 'value'}
    return jsonify(data)
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
if __name__ == "__main__":
    app.run(debug=True)
